export function mapEventTypesCorrelationValues(dataArray, mappingArray) {
  // Input validation
  if (!Array.isArray(dataArray) || !Array.isArray(mappingArray)) {
    console.error('Both arguments must be arrays');
    return [];
  }

  // Transform the data array (lowercase types and round correlations)
  const transformedData = dataArray
    .filter((item) => item && item.type && typeof item.type === 'string') // Filter out invalid items
    .map((item) => ({
      type: item.type.toLowerCase(),
      correlationCoefficient: Number(
        (typeof item.correlationCoefficient === 'number'
          ? item.correlationCoefficient
          : 0
        ).toFixed(2)
      ),
    }));

  // Create a map for easier lookup of unique combinations
  const uniqueEntries = new Map();

  transformedData.forEach((item) => {
    // If multiple entries exist for same type, keep the non-zero correlationCoefficient
    if (
      !uniqueEntries.has(item.type) ||
      (uniqueEntries.get(item.type).correlationCoefficient === 0 &&
        item.correlationCoefficient !== 0)
    ) {
      uniqueEntries.set(item.type, item);
    }
  });

  // Create the final mapped array
  const result = mappingArray
    .filter((item) => item && item.type && item.name && item.color) // Filter out invalid mapping items
    .map((mappingItem) => {
      const dataItem = uniqueEntries.get(mappingItem.type) || {
        correlationCoefficient: 0,
      };

      return {
        type: mappingItem.name.toLowerCase(),
        name: mappingItem.name,
        correlationCoefficient: dataItem.correlationCoefficient,
        color: mappingItem.color,
      };
    });

  return result;
}

// Example usage:
const dataArray = [
  { type: 'Insulin', correlationCoefficient: -0.8660254037844386 },
  { type: 'Medication', correlationCoefficient: 0 },
  { type: 'Food', correlationCoefficient: 0 },
  { type: 'Alcohol', correlationCoefficient: 0 },
  { type: 'Exercise', correlationCoefficient: 0 },
  { type: 'Sleep', correlationCoefficient: 0 },
  { type: 'Stress', correlationCoefficient: 0 },
  { type: 'Pain', correlationCoefficient: 0 },
  { type: 'Caffeine', correlationCoefficient: 0 },
  { type: 'Smoking', correlationCoefficient: 0 },
  { type: 'Insulin', correlationCoefficient: 0 },
  { type: 'Medication', correlationCoefficient: 0.8660254037844385 },
];

const mappingArray = [
  { index: 0, type: 'insulin', name: 'Insulin', color: '#FA4D56' },
  { index: 1, type: 'medication', name: 'Medication', color: '#9F1853' },
  { index: 2, type: 'food', name: 'Food', color: '#6929C4' },
  { index: 3, type: 'alcohol', name: 'Alcohol', color: '#009D9A' },
  { index: 4, type: 'exercise', name: 'Exercise', color: '#EE5396' },
  { index: 5, type: 'sleep', name: 'Sleep', color: '#520408' },
  { index: 6, type: 'stress', name: 'Stress', color: '#002D9C' },
  { index: 7, type: 'pain', name: 'Pain', color: '#B28600' },
  { index: 8, type: 'caffeine', name: 'Caffeine', color: '#A56EFF' },
  { index: 9, type: 'smoking', name: 'Smoking', color: '#30D5C8' },
];

console.log(mapEventTypesCorrelationValues(dataArray, mappingArray));
