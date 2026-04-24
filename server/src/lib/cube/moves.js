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

// Cycle edges function (helper)
function cycleEdges(cube, faces, direction) {
  // Create a deep copy so we don't mutate the original cube
  const updatedCube = structuredClone(cube);

  // Save the first face's top row (indexes 0–2)
  // This is used later to complete the cycle
  const temp = cube[faces[0]].slice(0, 3);

  // CLOCKWISE ROTATION (based on physical cube orientation)
  if (direction === 'clockwise') {
    // Move each face's top row to the next face in reverse order
    // Example with ['green', 'orange', 'blue', 'red']:
    // red    <- blue
    // blue   <- orange
    // orange <- green
    for (let i = faces.length - 1; i > 0; i--) {
      updatedCube[faces[i]].splice(
        0,                      // start at index 0 (top row)
        3,                      // replace 3 elements
        ...cube[faces[i - 1]].slice(0, 3) // previous face's top row
      );
    }

    // Complete the cycle:
    // first face gets the original last face's row
    // green <- original red
    updatedCube[faces[0]].splice(
      0,
      3,
      ...cube[faces[faces.length - 1]].slice(0, 3)
    );
  }

  // COUNTERCLOCKWISE ROTATION
  if (direction === 'counterclockwise') {
    // Move each face's top row to the next face in forward order
    // green  <- orange
    // orange <- blue
    // blue   <- red
    for (let i = 0; i < faces.length - 1; i++) {
      updatedCube[faces[i]].splice(
        0,
        3,
        ...cube[faces[i + 1]].slice(0, 3) // next face's top row
      );
    }

    // Complete the cycle:
    // last face gets the original first face's row
    // red <- original green
    updatedCube[faces[faces.length - 1]].splice(0, 3, ...temp);
  }

  // Return the updated cube with rotated edge rows
  return updatedCube;
}


// Rotate white clockwise function
function rotateWhite(cube, direction) {
  console.log(direction)
  let updatedCube = structuredClone(cube);

  if (direction === 'clockwise') {
    updatedCube.white = rotateFaceClockwise(cube.white);
  }

  if (direction === 'counterclockwise') {
    updatedCube.white = rotateFaceCounterClockwise(cube.white);
  }

  const sideFaces = ['green', 'orange', 'blue', 'red'];

  updatedCube = cycleEdges(updatedCube, sideFaces, direction);

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

  if (face === 'white') {
    return rotateWhite(cube, direction);
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