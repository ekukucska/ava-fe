const createOrderedSelectedEventTypes = (
  selectedTypes,
  eventTypesChartButtonsMapping
) => {
  const selectedTypesSet = new Set(selectedTypes);

  return eventTypesChartButtonsMapping
    .filter((eventType) => selectedTypesSet.has(eventType.type))
    .map((eventType) => eventType.type.toLowerCase());
};

export default createOrderedSelectedEventTypes;
