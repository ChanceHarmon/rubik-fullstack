// Library imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Module imports
import { createSolvedCube } from './lib/cube/cubeState.js';

// Use dotenv variables
dotenv.config();

//Turn on express and create our port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware

// Enable CORS for frontend-backend communication
// Parse incoming JSON request bodies
app.use(cors());
app.use(express.json());

// Routes

// Initial route
app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Server is running' });
});

// Real routes
app.get('/api/cube', (req, res) => {
  const cube = createSolvedCube();
  res.json(cube);
});


//Turn on the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});