function getMovingDistanceFrom(instruction) {
  return parseInt(instruction.split(" ")[1]);
}
function getDirectionFrom(instruction) {
  return instruction.split(" ")[0];
}
function calculateFinalPosition(instructions) {
  currentHorizontalPosition = 0;
  currentDepthPosition = 0;
  currentAimPosition = 0;
  instructions.forEach((instruction) => {
    movingDistance = getMovingDistanceFrom(instruction);
    direction = getDirectionFrom(instruction);
    if (direction === "forward") {
      currentHorizontalPosition = currentHorizontalPosition + movingDistance;
      currentDepthPosition =
        currentDepthPosition + currentAimPosition * movingDistance;
    }
    if (direction === "up") {
      currentAimPosition = currentAimPosition - movingDistance;
    }
    if (direction === "down") {
      currentAimPosition = currentAimPosition + movingDistance;
    }
  });
  return currentDepthPosition * currentHorizontalPosition;
}
