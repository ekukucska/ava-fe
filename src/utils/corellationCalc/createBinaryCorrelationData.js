export function createBinaryCorrelationData(sensorTimestamps, intervals) {
  return sensorTimestamps.map((sensorTime) => {
    const sensorDate = new Date(sensorTime);

    // Check if the sensor timestamp falls within any interval
    const isWithinAnyInterval = intervals.some((interval) => {
      const startDate = new Date(interval.start);
      const endDate = new Date(interval.end);
      return sensorDate >= startDate && sensorDate <= endDate;
    });

    // Return 1 if within an interval, otherwise 0
    return isWithinAnyInterval ? 1 : 0;
  });
}

// Example usage
const sensorTimestamps = [
  '2024-02-01T10:00:00Z',
  '2024-02-01T11:00:00Z',
  '2024-02-01T12:00:00Z',
];

const intervals = [
  { start: '2023-04-06T08:00:00', end: '2023-04-06T09:00:00' },
  { start: '2023-04-06T10:00:00', end: '2024-02-01T10:30:00Z' },
  { start: '2023-04-06T12:00:00', end: '2023-04-06T13:00:00' },
];

const binaryData = createBinaryCorrelationData(sensorTimestamps, intervals);
console.log(binaryData); // Output: [1, 0, 0]
