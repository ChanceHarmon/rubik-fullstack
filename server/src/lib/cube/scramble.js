import { applyMove } from "./moves.js";



const faces = ['white', 'yellow', 'green', 'blue', 'red', 'orange'];
const directions = ['clockwise', 'counterclockwise'];

function getRandom(items) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

export function generateScramble(length = 25) {
  const moves = [];

  for (let i = 0; i < length; i++) {
    const face = getRandom(faces);
    const direction = getRandom(directions);

    moves.push({ face, direction })
  }

  return moves;
}

export function applyScramble(cube, scrambleMoves) {
  let updatedCube = cube;

  for (const move of scrambleMoves) {
    updatedCube = applyMove(updatedCube, move.face, move.direction);
  }

  return updatedCube;
}