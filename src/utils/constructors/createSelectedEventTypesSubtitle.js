const createSelectedEventTypesSubtitle = (
  selectedTypes,
  eventTypesChartButtonsMapping
) => {
  const selectedTypesSet = new Set(selectedTypes);

  const orderedTypes = eventTypesChartButtonsMapping
    .filter((eventType) => selectedTypesSet.has(eventType.type))
    .map(
      (eventType) =>
        eventType.name.charAt(0).toUpperCase() + eventType.name.slice(1)
    )
    .join(' + ');

  return orderedTypes;
};

export default createSelectedEventTypesSubtitle;
