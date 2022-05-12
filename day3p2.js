function getNumZeroesIn(diagnosticReport, columnNumber) {
  numZeroes = 0;

  diagnosticReport.forEach((line) => {
    relevantBit = line[columnNumber];

    if (relevantBit === "0") {
      numZeroes++;
    }
  });

  return numZeroes;
}

function getNumOnesIn(diagnosticReport, columnNumber) {
  numOnes = 0;

  diagnosticReport.forEach((line) => {
    relevantBit = line[columnNumber];

    if (relevantBit === "1") {
      numOnes++;
    }
  });

  return numOnes;
}

function getGammaBit(diagnosticReport, index) {
  numZeroes = getNumZeroesIn(diagnosticReport, index);
  numOnes = getNumOnesIn(diagnosticReport, index);

  return numOnes > numZeroes ? "1" : "0";
}

function binaryToDecimal(binary) {
  decimal = parseInt(binary, 2);

  return decimal;
}

function gammaRate(diagnosticReport) {
  gammaRate = "";

  for (i = 0; i < diagnosticReport[0].length; i++) {
    gammaRate = gammaRate + getGammaBit(diagnosticReport, i);
  }

  return binaryToDecimal(gammaRate);
}

function getEpsilonBit(diagnosticReport, index) {
  numZeroes = getNumZeroesIn(diagnosticReport, index);
  numOnes = getNumOnesIn(diagnosticReport, index);

  return numOnes < numZeroes ? "1" : "0";
}

function epsilonRate(diagnosticReport) {
  epsilonRate = "";

  for (i = 0; i < diagnosticReport[0].length; i++) {
    epsilonRate = epsilonRate + getEpsilonBit(diagnosticReport, i);
  }

  return binaryToDecimal(epsilonRate);
}

function calculatePowerConsumption(diagnosticReport) {
  return gammaRate(diagnosticReport) * epsilonRate(diagnosticReport);
}

const diagnosticReport = ["0101", "0100", "0110", "0010", "0010"];

("0110");

/* 
const diagnosticReport = (
  await (await fetch("https://adventofcode.com/2021/day/3/input")).text()
)
  .trim()
  .split("\n"); */

console.log(calculatePowerConsumption(diagnosticReport));
