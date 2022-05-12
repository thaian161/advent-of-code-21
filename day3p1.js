function gammaRate(diagnosticReport) {}

function epsilonRate(diagnosticReport) {}

function calculatePowerConsumption(diagnosticReport) {
  return gammaRate(diagnosticReport) * epsilonRate(diagnosticReport);
}
