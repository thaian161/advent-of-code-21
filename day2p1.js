function getMovingDistanceFrom(instruction) {
  return parseInt(instruction.split(" ")[1]);
}

function getDirectionFrom(instruction) {
  return instruction.split(" ")[0];
}

function calculateFinalPosition(instructions) {
  currentHorizontalPosition = 0;
  currentDepthPosition = 0;
  instructions.forEach((instruction) => {
    movingDistance = getMovingDistanceFrom(instruction);
    direction = getDirectionFrom(instruction);
    if (direction === "forward") {
      currentHorizontalPosition = currentHorizontalPosition + movingDistance;
    }
    if (direction === "up") {
      currentDepthPosition = currentDepthPosition - movingDistance;
    }
    if (direction === "down") {
      currentDepthPosition = currentDepthPosition + movingDistance;
    }
  });
  return [currentDepthPosition, currentHorizontalPosition];
}
