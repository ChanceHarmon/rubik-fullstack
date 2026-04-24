function rotateFaceClockwise(stickers) {
  return [
    stickers[6], stickers[3], stickers[0],
    stickers[7], stickers[4], stickers[1],
    stickers[8], stickers[5], stickers[2],
  ];
}

function rotateFaceCounterClockwise(stickers) {
  return [
    stickers[2], stickers[5], stickers[8],
    stickers[1], stickers[4], stickers[7],
    stickers[0], stickers[3], stickers[6],
  ];
}

export function applyMove(cube, face, direction) {
  const updatedCube = structuredClone(cube);

  if (direction === 'clockwise') {
    updatedCube[face] = rotateFaceClockwise(cube[face]);
  }

  if (direction === 'counterclockwise') {
    updatedCube[face] = rotateFaceCounterClockwise(cube[face]);
  }

  return updatedCube;
}