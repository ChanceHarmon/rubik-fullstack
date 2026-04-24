// Library imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Module imports
import { createSolvedCube } from './lib/cube/cubeState.js';
import { applyMove } from './lib/cube/moves.js';

// Server variables
let currentCube = createSolvedCube();

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
app.get('/api/health', (request, response) => {
  response.json({ ok: true, message: 'Server is running' });
});

// Real routes
app.get('/api/cube', (request, response) => {
  response.json(currentCube);
});


app.post('/api/cube/move', (request, response) => {

  try {
    const { face, direction } = request.body;

    currentCube = applyMove(currentCube, face, direction);

    response.json(currentCube);
  } catch (error) {
    console.error(error.message);

    response.status(400).json({
      error: error.message,
    });
  }

});


app.post('/api/cube/reset', (request, response) => {
  currentCube = createSolvedCube();
  response.json(currentCube);
});


//Turn on the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});