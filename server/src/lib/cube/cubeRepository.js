import { pool } from '../../db.js';
import { createSolvedCube } from './cubeState.js';

const CUBE_ID = 1;

export async function getCube() {
  // 1. Try to get existing cube
  const result = await pool.query(
    'SELECT state FROM cubes WHERE id = $1',
    [CUBE_ID]
  );

  // 2. If it exists, return it
  if (result.rows.length > 0) {
    return result.rows[0].state;
  }

  // 3. Otherwise, create a new solved cube
  const solvedCube = createSolvedCube();

  await pool.query(
    'INSERT INTO cubes (id, state) VALUES ($1, $2)',
    [CUBE_ID, solvedCube]
  );

  return solvedCube;
}

export async function saveCube(state) {
  await pool.query(
    `
    UPDATE cubes
    SET state = $1,
        updated_at = NOW()
    WHERE id = $2
    `,
    [state, CUBE_ID]
  );
}

export async function resetCube() {
  const solvedCube = createSolvedCube();

  await pool.query(
    `
    UPDATE cubes
    SET state = $1,
        updated_at = NOW()
    WHERE id = $2
    `,
    [solvedCube, CUBE_ID]
  );

  return solvedCube;
}