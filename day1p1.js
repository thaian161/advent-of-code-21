function countIncreases(measurement) {
  counter = 0;
  for (i = 0; i < measurement.length - 1; i++) {
    currentNumber = measurement[i];
    numberAfterCurrent = measurement[i + 1];
    if (currentNumber < numberAfterCurrent) {
      counter++;
    }
  }
  return counter;
}
