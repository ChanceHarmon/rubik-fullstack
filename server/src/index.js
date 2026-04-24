// Library imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Module imports
import { createSolvedCube } from './lib/cube/cubeState.js';
import { applyMove } from './lib/cube/moves.js';
import { getCube, saveCube, resetCube } from './lib/cube/cubeRepository.js';

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

// GET cube route
app.get('/api/cube', async (request, response) => {
  const cube = await getCube();
  response.json(cube);
});

// POST cube move route
app.post('/api/cube/move', async (request, response) => {
  try {
    const { face, direction } = request.body;

    const cube = await getCube();

    const updatedCube = applyMove(cube, face, direction);

    await saveCube(updatedCube);

    response.json(updatedCube);
  } catch (error) {
    console.error(error.message);

    response.status(400).json({
      error: error.message,
    });
  }
});

// POST cube reset route
app.post('/api/cube/reset', async (request, response) => {
  const cube = await resetCube();
  response.json(cube);
});


//Turn on the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});