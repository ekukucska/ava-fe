export function mapEventCounts(
  studiesListTotalCounts,
  eventTypesChartButtonsMapping
) {
  return eventTypesChartButtonsMapping.map((eventType) => {
    // Access counts from eventTypeTotals and handle case-sensitivity
    const eventCount =
      studiesListTotalCounts.eventTypeTotals?.[eventType.name] ||
      studiesListTotalCounts.eventTypeTotals?.[
        eventType.type?.charAt(0).toUpperCase() + eventType.type?.slice(1)
      ] ||
      0;

    return {
      ...eventType,
      count: eventCount,
    };
  });
}

// Example usage
const eventData = {
  totalParticipants: 2,
  totalAnomalies: 7,
  totalEvents: 61,
  eventTypeTotals: {
    Insulin: 7,
    Medication: 6,
    Food: 6,
    Alcohol: 6,
    Exercise: 6,
    Sleep: 6,
    Stress: 6,
    Pain: 6,
    Caffeine: 6,
    Smoking: 6,
  },
  earliestStartDate: '2024-01-10T00:00:00.000Z',
  latestEndDate: '2024-09-10T00:00:00.000Z',
};

const eventsArray = [
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

// This will now correctly map the counts
console.log(mapEventCounts(eventData, eventsArray));
