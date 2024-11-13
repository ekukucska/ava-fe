export function calculateAverageCorrelations(data) {
  const result = [];

  // Group data by type and calculate the sum of correlations and count for each type
  const correlationSums = data.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = { sum: 0, count: 0 };
    }
    acc[item.type].sum += item.correlation;
    acc[item.type].count += 1;
    return acc;
  }, {});

  // Calculate the average correlation for each type and build the result array
  for (const [type, { sum, count }] of Object.entries(correlationSums)) {
    result.push({
      type: type,
      correlationCoefficient: sum / count,
    });
  }

  return result;
}

// Example usage:
const data = [
  { type: 'Insulin', correlation: -0.8660254037844386 },
  { type: 'Medication', correlation: 0 },
  { type: 'Food', correlation: 0 },
  { type: 'Alcohol', correlation: 0 },
  { type: 'Exercise', correlation: 0 },
  { type: 'Sleep', correlation: 0 },
  { type: 'Stress', correlation: 0 },
  { type: 'Pain', correlation: 0 },
  { type: 'Caffeine', correlation: 0 },
  { type: 'Smoking', correlation: 0 },
  { type: 'Insulin', correlation: 0 },
  { type: 'Medication', correlation: 0.8660254037844385 },
  { type: 'Food', correlation: 0 },
  { type: 'Alcohol', correlation: 0 },
  { type: 'Exercise', correlation: 0 },
  { type: 'Sleep', correlation: 0 },
  { type: 'Stress', correlation: 0 },
  { type: 'Pain', correlation: 0 },
  { type: 'Caffeine', correlation: 0 },
  { type: 'Smoking', correlation: 0 },
  { type: 'Insulin', correlation: 0 },
  { type: 'Medication', correlation: 0 },
  { type: 'Food', correlation: 0 },
  { type: 'Alcohol', correlation: 0 },
  { type: 'Exercise', correlation: 0 },
  { type: 'Sleep', correlation: 0 },
  { type: 'Stress', correlation: 0 },
  { type: 'Pain', correlation: 0 },
  { type: 'Caffeine', correlation: 0 },
  { type: 'Smoking', correlation: 0 },
];

console.log(calculateAverageCorrelations(data));
