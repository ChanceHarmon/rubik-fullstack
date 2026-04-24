// Rotate clockwise function
function rotateFaceClockwise(stickers) {
  return [
    stickers[6], stickers[3], stickers[0],
    stickers[7], stickers[4], stickers[1],
    stickers[8], stickers[5], stickers[2],
  ];
}

// Rotate counterclockwise function
function rotateFaceCounterClockwise(stickers) {
  return [
    stickers[2], stickers[5], stickers[8],
    stickers[1], stickers[4], stickers[7],
    stickers[0], stickers[3], stickers[6],
  ];
}

// Rotate white clockwise function
function rotateWhiteClockwise(cube) {
  const updatedCube = structuredClone(cube);

  updatedCube.white = rotateFaceClockwise(cube.white);

  updatedCube.orange[0] = cube.green[0];
  updatedCube.orange[1] = cube.green[1];
  updatedCube.orange[2] = cube.green[2];

  updatedCube.blue[0] = cube.orange[0];
  updatedCube.blue[1] = cube.orange[1];
  updatedCube.blue[2] = cube.orange[2];

  updatedCube.red[0] = cube.blue[0];
  updatedCube.red[1] = cube.blue[1];
  updatedCube.red[2] = cube.blue[2];

  updatedCube.green[0] = cube.red[0];
  updatedCube.green[1] = cube.red[1];
  updatedCube.green[2] = cube.red[2];

  return updatedCube;
}

// Rotate white counterclockwise function
function rotateWhiteCounterClockwise(cube) {
  const updatedCube = structuredClone(cube);

  updatedCube.white = rotateFaceCounterClockwise(cube.white);

  updatedCube.orange[0] = cube.blue[0];
  updatedCube.orange[1] = cube.blue[1];
  updatedCube.orange[2] = cube.blue[2];

  updatedCube.green[0] = cube.orange[0];
  updatedCube.green[1] = cube.orange[1];
  updatedCube.green[2] = cube.orange[2];

  updatedCube.red[0] = cube.green[0];
  updatedCube.red[1] = cube.green[1];
  updatedCube.red[2] = cube.green[2];

  updatedCube.blue[0] = cube.red[0];
  updatedCube.blue[1] = cube.red[1];
  updatedCube.blue[2] = cube.red[2];

  return updatedCube;
}

// Apply move function
export function applyMove(cube, face, direction) {

  if (face === 'white' && direction === 'clockwise') {
    return rotateWhiteClockwise(cube);
  }

  if (face === 'white' && direction === 'counterclockwise') {
    return rotateWhiteCounterClockwise(cube);
  }

  const updatedCube = structuredClone(cube);

  if (direction === 'clockwise') {
    updatedCube[face] = rotateFaceClockwise(cube[face]);
  }

  if (direction === 'counterclockwise') {
    updatedCube[face] = rotateFaceCounterClockwise(cube[face]);
  }

  return updatedCube;
}