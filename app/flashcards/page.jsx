'use client'
import { useState, useEffect } from "react"
import { Card,CardActionArea, CardContent, Box, Button, Container, Grid, TextField, Typography, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from "@mui/material"
import db from "@/firebase"

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { doc, collection, writeBatch, getDoc, } from "firebase/firestore"


export default function Flashcard() {
    const { isLoaded, isSignedIn, user } = useUser()
    const [flashcards, setFlashcards] = useState([])
    const router =  useRouter()
    const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`)
      }

    useEffect(() => {
        async function getFlashcards() {
          if (!user) return
          const docRef = doc(collection(db, 'users'), user.id)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            const collections = docSnap.data().flashcardSets || []
            console.log(docSnap.data())
            setFlashcards(collections)
          } else {
            await setDoc(docRef, { flashcards: [] })
          }
        }
        getFlashcards()
      }, [user])

    return(
      <Container className="flex items-center justify-center flex-col my-24 md:my-24 mx-auto" maxWidth="md">
       <Typography variant="h5" className='font-bold leading-tight py-2 tracking-wider text-2xl'>
                    Flashcard Sets
      </Typography>
      <Grid container spacing={3} sx={{ mt: 4 }} className="my-5 flex">
        {flashcards.map((flashcard, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => handleCardClick(flashcard.name)}>
                <CardContent>
                  <Typography className='font-bold  leading-tight py-2 tracking-wider text-center' variant="h5" component="div">
                    {flashcard.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    )
}  