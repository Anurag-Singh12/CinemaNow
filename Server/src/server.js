import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './Db/connectionDB.js';

const app = express();

// Middleware
app.use(express.json())                                         //connecting backend with any frontend url
app.use(cors())

await connectDB();

// API Routes
app.get('/', (req, res) => res.send('Server is Live!'))

app.listen(process.env.PORT, () => 
  console.log(`Server listening at http://localhost:${process.env.PORT}`)
);