export const createStartEndObjects = (startArray, endArray) => {
  if (startArray.length !== endArray.length) {
    throw new Error('Start and end arrays must have the same length');
  }

  const result = startArray.map((startTime, index) => ({
    start: startTime,
    end: endArray[index],
  }));

  return result;
};

// Example input arrays
const startTimes = [
  '2023-04-06T08:00:00',
  '2023-04-06T10:00:00',
  '2023-04-06T12:00:00',
];
const endTimes = [
  '2023-04-06T09:00:00',
  '2023-04-06T11:00:00',
  '2023-04-06T13:00:00',
];

const result = createStartEndObjects(startTimes, endTimes);
console.log(result);
