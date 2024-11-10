export function countSubjectsTotals(data) {
  const result = [];
  const itemCounts = {};

  data.forEach((entry) => {
    // Count anomalies
    entry.anomalies.forEach(() => {
      itemCounts['anomaly'] = (itemCounts['anomaly'] || 0) + 1;
    });

    // Count events
    entry.events.forEach((event) => {
      const eventType = event.eventType.toLowerCase();
      const eventCount = event.startDateTime.length;
      itemCounts[eventType] = (itemCounts[eventType] || 0) + eventCount;
    });
  });

  // Convert itemCounts object to an array of objects
  for (const [itemType, count] of Object.entries(itemCounts)) {
    result.push({ itemType, count });
  }

  return result;
}

// Example usage:
// const inputData = [
//   /* array of objects as per your input format */
// ];
// console.log(countSubjectsTotals(inputData));
