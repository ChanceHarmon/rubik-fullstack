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
function cycleEdges(cube, faceConfigs, direction) {
  const updatedCube = structuredClone(cube);

  // Save first face values
  const temp = faceConfigs[0].indices.map(
    index => cube[faceConfigs[0].face][index]
  );

  if (direction === 'clockwise') {
    for (let i = faceConfigs.length - 1; i > 0; i--) {
      const current = faceConfigs[i];
      const prev = faceConfigs[i - 1];

      current.indices.forEach((index, idx) => {
        updatedCube[current.face][index] =
          cube[prev.face][prev.indices[idx]];
      });
    }

    // Complete cycle
    const first = faceConfigs[0];
    const last = faceConfigs[faceConfigs.length - 1];

    first.indices.forEach((index, idx) => {
      updatedCube[first.face][index] =
        cube[last.face][last.indices[idx]];
    });
  }

  if (direction === 'counterclockwise') {
    for (let i = 0; i < faceConfigs.length - 1; i++) {
      const current = faceConfigs[i];
      const next = faceConfigs[i + 1];

      current.indices.forEach((index, idx) => {
        updatedCube[current.face][index] =
          cube[next.face][next.indices[idx]];
      });
    }

    // Complete cycle
    const last = faceConfigs[faceConfigs.length - 1];

    last.indices.forEach((index, idx) => {
      updatedCube[last.face][index] = temp[idx];
    });
  }

  return updatedCube;
}

// COLOR ROTATIONS

// Rotate white function
function rotateWhite(cube, direction) {
  console.log(direction)
  let updatedCube = structuredClone(cube);

  if (direction === 'clockwise') {
    updatedCube.white = rotateFaceClockwise(cube.white);
  }

  if (direction === 'counterclockwise') {
    updatedCube.white = rotateFaceCounterClockwise(cube.white);
  }

  const faceConfigs = [
    { face: 'green', indices: [0, 1, 2] },
    { face: 'orange', indices: [0, 1, 2] },
    { face: 'blue', indices: [0, 1, 2] },
    { face: 'red', indices: [0, 1, 2] },
  ];

  updatedCube = cycleEdges(updatedCube, faceConfigs, direction);

  return updatedCube;
}

// Rotate green function
function rotateGreen(cube, direction) {
  let updatedCube = structuredClone(cube);

  if (direction === 'clockwise') {
    updatedCube.green = rotateFaceClockwise(cube.green);
  }

  if (direction === 'counterclockwise') {
    updatedCube.green = rotateFaceCounterClockwise(cube.green);
  }

  const faceConfigs = [
    { face: 'white', indices: [6, 7, 8] },
    { face: 'red', indices: [0, 3, 6] },
    { face: 'yellow', indices: [2, 1, 0] },
    { face: 'orange', indices: [8, 5, 2] },
  ];

  updatedCube = cycleEdges(updatedCube, faceConfigs, direction);

  return updatedCube;
}

// Rotate red function
function rotateRed(cube, direction) {
  let updatedCube = structuredClone(cube);

  if (direction === 'clockwise') {
    updatedCube.red = rotateFaceClockwise(cube.red);
  }

  if (direction === 'counterclockwise') {
    updatedCube.red = rotateFaceCounterClockwise(cube.red);
  }

  const faceConfigs = [
    { face: 'white', indices: [2, 5, 8] },
    { face: 'blue', indices: [6, 3, 0] },
    { face: 'yellow', indices: [2, 5, 8] },
    { face: 'green', indices: [2, 5, 8] },
  ];

  updatedCube = cycleEdges(updatedCube, faceConfigs, direction);

  return updatedCube;
}

// Rotate orange function
function rotateOrange(cube, direction) {
  let updatedCube = structuredClone(cube);

  if (direction === 'clockwise') {
    updatedCube.orange = rotateFaceClockwise(cube.orange);
  }

  if (direction === 'counterclockwise') {
    updatedCube.orange = rotateFaceCounterClockwise(cube.orange);
  }

  const faceConfigs = [
    { face: 'white', indices: [0, 3, 6] },
    { face: 'green', indices: [0, 3, 6] },
    { face: 'yellow', indices: [0, 3, 6] },
    { face: 'blue', indices: [8, 5, 2] },
  ];

  updatedCube = cycleEdges(updatedCube, faceConfigs, direction);

  return updatedCube;
}

// Rotate blue function
function rotateBlue(cube, direction) {
  let updatedCube = structuredClone(cube);

  if (direction === 'clockwise') {
    updatedCube.blue = rotateFaceClockwise(cube.blue);
  }

  if (direction === 'counterclockwise') {
    updatedCube.blue = rotateFaceCounterClockwise(cube.blue);
  }

  const faceConfigs = [
    { face: 'white', indices: [2, 1, 0] },
    { face: 'orange', indices: [0, 3, 6] },
    { face: 'yellow', indices: [6, 7, 8] },
    { face: 'red', indices: [8, 5, 2] },
  ];

  updatedCube = cycleEdges(updatedCube, faceConfigs, direction);

  return updatedCube;
}


// Apply move function
export function applyMove(cube, face, direction) {

  if (face === 'white') {
    return rotateWhite(cube, direction);
  }
  if (face === 'green') {
    return rotateGreen(cube, direction);
  }
  if (face === 'red') {
    return rotateRed(cube, direction);
  }
  if (face === 'orange') {
    return rotateOrange(cube, direction);
  }
  if (face === 'blue') {
    return rotateBlue(cube, direction);
  }

  // If we get here, the move is not implemented
  throw new Error(`Move not implemented: ${face} ${direction}`);

}