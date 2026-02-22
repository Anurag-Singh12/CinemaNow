import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './Db/connectionDB.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/indexinngest.js"

const app = express();

await connectDB();

// Middleware
app.use(express.json())
app.use(cors())                                               //connecting backend with any frontend url
app.use(clerkMiddleware())

// API Routes
app.get('/', (req, res) => res.send('Server is Live!'))
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(process.env.PORT, () => 
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
);