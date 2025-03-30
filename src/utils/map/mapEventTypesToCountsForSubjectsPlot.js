export function mapEventTypesToCountsForSubjectsPlot(
  countsArray,
  eventsMapArray,
  anomalyMap
) {
  // Ensure countsArray is a valid array
  if (!Array.isArray(countsArray)) {
    console.error(
      'Expected countsArray to be an array, but received:',
      countsArray
    );
    return [];
  }

  // Initialize the result array
  const result = [];

  // Convert events map array into an object for quick lookup
  const eventsMap = Object.fromEntries(
    eventsMapArray.map((event) => [event.type, event])
  );

  // Loop through each item in the counts array
  countsArray.forEach((item) => {
    const { itemType, count } = item;

    // Check if the item is in events or anomalies, and get its mapping data
    const mappingData =
      itemType === 'anomaly' ? anomalyMap : eventsMap[itemType];

    // If mapping data exists, push the formatted object to the result array
    if (mappingData) {
      result.push({
        type: mappingData.type,
        name: mappingData.name,
        color: mappingData.color,
        count: count,
      });
    }
  });

  return result;
}

// Example usage:
const countsArray = [
  { itemType: 'anomaly', count: 4 },
  { itemType: 'insulin', count: 3 },
  { itemType: 'medication', count: 3 },
  { itemType: 'food', count: 3 },
  { itemType: 'alcohol', count: 3 },
  { itemType: 'exercise', count: 3 },
  { itemType: 'sleep', count: 3 },
  { itemType: 'stress', count: 3 },
  { itemType: 'pain', count: 3 },
  { itemType: 'caffeine', count: 3 },
  { itemType: 'smoking', count: 3 },
];

const eventsMapArray = [
  { index: 0, type: 'insulin', name: 'Insulin', color: '#9F1853' },
  { index: 1, type: 'medication', name: 'Medication', color: '#30D5C8' },
  { index: 2, type: 'food', name: 'Food', color: '#009D9A' },
  { index: 3, type: 'alcohol', name: 'Alcohol', color: '#002D9C' },
  { index: 4, type: 'exercise', name: 'Exercise', color: '#A56EFF' },
  { index: 5, type: 'sleep', name: 'Sleep', color: '#1E90FF' },
  { index: 6, type: 'stress', name: 'Stress', color: '#FA4D56' },
  { index: 7, type: 'pain', name: 'Pain', color: '#B28600' },
  { index: 8, type: 'caffeine', name: 'Caffeine', color: '#EE5396' },
  { index: 9, type: 'smoking', name: 'Smoking', color: '#005D5D' },
];

const anomalyMap = {
  index: 10,
  type: 'anomaly',
  name: 'Anomalies',
  color: '#A9A9A9',
};

console.log(
  mapEventTypesToCountsForSubjectsPlot(countsArray, eventsMapArray, anomalyMap)
);
