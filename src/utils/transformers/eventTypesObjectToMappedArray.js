export function eventTypesObjectToMappedArray(
  studyDetails,
  eventTypeMap,
  totalAnomalies
) {
  return eventTypeMap.map((event) => {
    const count = studyDetails.eventTypeTotals[event.name] || 0;
    const percentage = ((count / totalAnomalies) * 100).toFixed(2);

    return {
      eventType: event.type,
      count: count,
      percentage: parseFloat(percentage),
      name: event.name,
      color: event.color,
    };
  });
}
