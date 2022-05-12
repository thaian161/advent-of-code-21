let topic = puzzleInput
    .text()
    .trim()
    .split("\n")
    .map(numberAsAString => parseInt(numberAsAString));
function countIncreases(measurement) {
    counter = 0
    for (i = 0; i < measurement.length - 3; i++) {
        firstNumber = measurement[i] + measurement[i + 1] + measurement[i + 2];
        secondNumber = measurement[i + 1] + measurement[i + 2] + measurement[i + 3];
        if (firstNumber < secondNumber) {
            counter++;
        }
    }
    return counter;
}
countIncreases(topic);
