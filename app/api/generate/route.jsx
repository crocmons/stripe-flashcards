import { NextResponse } from "next/server";
import Groq from "groq-sdk";


const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards of question and answer from it. Make sure to create exactly 10 flashcards. Front should be a question and back should be the answer to the question.
Both front and back could be anywheere between 1-3 sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function  POST(req) {

const data = await req.text()

const completion = await groq.chat.completions.create({
    messages:[
        {role: 'system', content:systemPrompt},
        {role: 'user', content:data}
    ],
    model: "llama-3.1-8b-instant",
    response_format: { type: 'json_object' }
  });


const flashcards= JSON.parse(completion.choices[0].message.content)
return NextResponse.json(flashcards)
}