'use client'
import { useState } from "react"
import { useRouter } from "next/router"
import { Card, CardActionArea, CardContent, Box, Button, Container, Grid, TextField, Typography, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from "@mui/material"
import db from "@/firebase"
import { doc, collection, writeBatch, getDoc, } from "firebase/firestore"
import { useUser } from "@clerk/nextjs"
import Link from 'next/link'


export default function generate() {

    const { isLoaded, isSignedIn, user } = useUser()
    const [text, setText] = useState('')
    const [flashcards, setFlashCards] = useState([])
    const [flipped, setFlipped] = useState({})
    const [setName, setSetName] = useState('')
    const [dialogOpen, setDialogOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const cardStyles = {
        perspective: '1000px',
    };



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
    const handleOpenDialog = () => setDialogOpen(true)
    const handleCloseDialog = () => setDialogOpen(false)
    const saveFlashcards = async () => {
        if (!setName.trim()) {
            alert('Please enter a name for your flashcard set.')
            return
        }

        try {
            const userDocRef = doc(collection(db, 'users'), user.id)
            const userDocSnap = await getDoc(userDocRef)

            const batch = writeBatch(db)

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data()
                const updatedSets = [...(userData.flashcardSets || []), { name: setName }]
                batch.update(userDocRef, { flashcardSets: updatedSets })
            } else {
                batch.set(userDocRef, { flashcardSets: [{ name: setName }] })
            }

            const setDocRef = doc(collection(userDocRef, 'flashcardSets'), setName)
            batch.set(setDocRef, { flashcards })

            await batch.commit()

            alert('Flashcards saved successfully!')
            handleCloseDialog()
            setSetName('')
        } catch (error) {
            console.error('Error saving flashcards:', error)
        }
    }




    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('api/generate', {
                method: 'POST',
                body: text
            })

            if (!response.ok) {
                throw new Error("Something went wrong while generating flashcards!");

            }
            const data = await response.json()
            console.log(data)
            await setFlashCards(data.flashcards)
            console.log(flashcards)
            console.log(flashcards.length)

        } catch (Error) {
            console.error("Error occured: ", Error)
        }finally{
            setIsLoading(false)
        }
    }



    const handleCardClick = async (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    return (
        <Container maxWidth="lg" className=" flex items-center justify-center flex-col mx-auto my-14 md:my-28">
                <Box sx={{ my: 4 }} className="w-1/2">
                    <Typography variant="h4" className='font-bold text-2xl md:text-4xl leading-tight py-2 tracking-wider' component="h1" gutterBottom>
                        Create Flashcards
                    </Typography>
                    <TextField
                        onChange={(e) => setText(e.target.value)}
                        label="Enter Text"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{ mb: 2 }}
                        type="text" />
                    <div className="flex justify-center items-center">
                    <Button
                    
                        className="py-2 px-4 border border-slate-700 text-center items-center 
        justify-center text-white bg-black rounded-md text-xl my-1"
                        onClick={handleSubmit}
                        disabled={isLoading }
                        
                    >
                        <Link href="#generate">{isLoading ? "Submitting....." :"Submit"}</Link>
                        
                    </Button>
                </div>
                </Box>
                {flashcards?.length > 0 && (
                    <Box sx={{ mt: 4 }} className="w-3/4">
                        <Typography variant="h5" className='font-bold text-2xl md:text-4xl leading-tight py-2 tracking-wider' >Flashcards Preview</Typography>
                        <Grid container spacing={3} sx={{ mt: 4 }}>
                            {flashcards.map((flashcard, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index} >
                                    <Card sx={{ height: 200, position: 'relative' }}>
                                        <CardActionArea
                                            onClick={() => handleCardClick(index)}
                                            sx={{ height: '100%', width: '100%' }}
                                        >
                                            <CardContent
                                                sx={{
                                                    height: '100%',
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    position: 'relative',
                                                }}
                                            >
                                                <Box sx={{ width: '100%', height: '100%', perspective: '1000px' }}>
                                                    <div
                                                        style={{
                                                            ...cardInnerStyles,
                                                            transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                                        }}
                                                    >

                                                        <div style={{ ...frontStyles, zIndex: flipped[index] ? 1 : 2 }}>
                                                            <Typography  component="div" className='font-bold leading-tight py-2 tracking-wider' >
                                                                {flashcard.front}
                                                            </Typography>
                                                        </div>


                                                        <div style={{ ...backStyles, zIndex: flipped[index] ? 2 : 1 }}>
                                                            <Typography  component="div" className='font-bold leading-tight py-2 tracking-wider'>
                                                                {flashcard.back}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </CardContent>

                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                            <Button  className="py-2 px-4 border border-slate-700 text-center items-center 
        justify-center text-white bg-black rounded-md text-xl my-1" onClick={handleOpenDialog}>
                                Save Flashcards
                            </Button>
                        </Box>
                    </Box>

                )}
                <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                    <DialogTitle>Save Flashcard Set</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your flashcard set.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Set Name"
                            type="text"
                            fullWidth
                            value={setName}
                            onChange={(e) => setSetName(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button onClick={saveFlashcards} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            
        </Container>
    )
}

