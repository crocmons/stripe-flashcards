'use client'
import { useState, useEffect } from "react"
import { ArrowBack, ArrowForward } from "@mui/icons-material"; 

import { Card, CardActionArea, CardContent, Box, Button, Container, Typography } from "@mui/material"
import db from "@/firebase"
import { useSearchParams } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { doc, getDoc } from "firebase/firestore"
import Link from "next/link";

export default function Flashcard() {
    const { isLoaded, isSignedIn, user } = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0) // State to keep track of current flashcard

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
          ...prev,
          [id]: !prev[id],
        }))
    }

    const handleNext = () => {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const cardInnerStyles = {
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s',
    };

    const frontStyles = {
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fff',
        transform: 'rotateY(0deg)', // Front starts facing the viewer
        zIndex: 2,                  // Ensure the front is initially on top
    };
    const backStyles = {
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fff',
        transform: 'rotateY(180deg)', // Back starts rotated 180 degrees
        zIndex: 1,                    // Ensure the back is behind initially
    };

    useEffect(() => {
        async function getFlashcard() {
          if (!search || !user) return
          const docRef = doc(db, 'users', user.id, 'flashcardSets', search);
          console.log("Querying document path:", docRef.path);
          const docs = await getDoc(docRef)
          const flashcards = docs.data().flashcards
          setFlashcards(flashcards)
        }
        getFlashcard()
    }, [search, user])

    return (
        <Container className=" mt-24 md:mt-24"> 
            <Box sx={{ mt: 4 }} className="flex flex-col items-center justify-center mx-auto">
                <Typography variant="h5" className='font-bold leading-tight py-2 tracking-wider'>
                    Flashcards
                </Typography>

                {/* Display current flashcard */}
                {flashcards.length > 0 && (
                    <Box sx={{ mt: 4 }} className="flex flex-col items-center w-4/5">
                        <Card sx={{ height: 500, width: '100%', position: 'relative' }}>
                            <CardActionArea
                                onClick={() => handleCardClick(currentIndex)}
                                sx={{ height: '100%', width: '100%' }}
                            >
                                <CardContent sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                    <Box sx={{ width: '100%', height: '100%', perspective: '1000px' }}>
                                        <div
                                            style={{
                                                ...cardInnerStyles,
                                                transform: flipped[currentIndex] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                            }}
                                            
                                        >
                                            <div style={{ ...frontStyles, zIndex: flipped[currentIndex] ? 1 : 2 }}>
                                                <Typography className='font-bold leading-tight py-2 tracking-wider' component="div">
                                                    {flashcards[currentIndex].front}
                                                </Typography>
                                            </div>
                                            <div style={{ ...backStyles, zIndex: flipped[currentIndex] ? 2 : 1 }}>
                                                <Typography className='font-bold leading-tight py-2 tracking-wider' component="div">
                                                    {flashcards[currentIndex].back}
                                                </Typography>
                                            </div>
                                        </div>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, width: '100%' }}>
                            <button 
                            className="py-2 px-4 border border-slate-700 text-center items-center 
                            justify-center text-white bg-black rounded-md text-2xl my-1" 
                                onClick={handlePrev} 
                                disabled={currentIndex === 0} 
                                sx={{ color: 'white','&.Mui-disabled': {
      color: 'gray',
      backgroundColor: '#333', 
    } }}
                            >
                                <ArrowBack />  
                            </button>
                            <button 
                                className="py-2 px-4 border border-slate-700 text-center items-center 
                                justify-center text-white bg-black rounded-md font-bold text-xl my-1" 
                                onClick={handleNext} 
                                disabled={currentIndex === flashcards.length - 1} 
                                
                            >
                                <ArrowForward />  {/* Next button with forward arrow */}
                            </button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    )
}
