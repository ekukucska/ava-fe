export const calculateCorrelation = (glucoseValues, eventValues) => {
  if (glucoseValues.length !== eventValues.length) {
    throw new Error('Arrays must have the same length.');
  }

  const mean = (arr) => arr.reduce((sum, value) => sum + value, 0) / arr.length;

  // Calculate mean for each array
  const glucoseMean = mean(glucoseValues);
  const eventMean = mean(eventValues);

  // Calculate deviations from the mean for each array
  const glucoseDeviations = glucoseValues.map((value) => value - glucoseMean);
  const eventDeviations = eventValues.map((value) => value - eventMean);

  // Calculate covariance
  const covariance =
    glucoseDeviations.reduce(
      (sum, value, index) => sum + value * eventDeviations[index],
      0
    ) /
    (glucoseValues.length - 1);

  // Standard deviation function
  const stdDev = (arr) => {
    const meanValue = mean(arr);
    return Math.sqrt(
      arr.reduce((sum, value) => sum + Math.pow(value - meanValue, 2), 0) /
        (arr.length - 1)
    );
  };

  // Calculate standard deviations
  const glucoseStdDev = stdDev(glucoseValues);
  const eventStdDev = stdDev(eventValues);

  // Check for zero standard deviation
  if (glucoseStdDev === 0 || eventStdDev === 0) {
    console.warn(
      'One of the arrays has zero variance; returning correlation as 0.'
    );
    return 0; // or NaN or null, depending on how you want to handle this
  }

  // Calculate correlation
  const correlation = covariance / (glucoseStdDev * eventStdDev);

  return correlation;
};

// Example usage
const glucoseData = [95, 100, 105];
const eventBinaryArray = [0, 0, 0];

const correlation = calculateCorrelation(glucoseData, eventBinaryArray);
console.log(`Correlation between glucose levels and events: ${correlation}`);
