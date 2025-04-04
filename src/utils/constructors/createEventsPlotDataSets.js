export function createEventsPlotDataSets(
  filteredSubjects,
  eventTypesChartButtonsMapping,
  anomalyMapForSubjectsPlot
) {
  const datasets = [];

  // Sensor data dataset
  if (filteredSubjects.sensorData && filteredSubjects.sensorData.length > 0) {
    const sensorDataset = {
      x: filteredSubjects.sensorData[0].dateTime,
      y: filteredSubjects.sensorData[0].values,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: '#30475D' },
      name: 'CGM',
    };
    datasets.push(sensorDataset);
  }

  // Anomalies dataset
  if (filteredSubjects.anomalies && filteredSubjects.anomalies.length > 0) {
    const anomalyDataset = {
      type: 'bar',
      x: filteredSubjects.anomalies.map((anomaly) => {
        const startMs = new Date(anomaly.startDateTime).getTime();
        const endMs = new Date(anomaly.endDateTime).getTime();
        const midpointMs = startMs + (endMs - startMs) / 2;
        return new Date(midpointMs).toISOString();
      }),
      y: new Array(filteredSubjects.anomalies.length).fill(220),
      marker: { color: anomalyMapForSubjectsPlot.color },
      name: anomalyMapForSubjectsPlot.name,
      width: filteredSubjects.anomalies.map(
        (anomaly) =>
          new Date(anomaly.endDateTime).getTime() -
          new Date(anomaly.startDateTime).getTime()
      ),
      opacity: 0.6,
    };
    datasets.push(anomalyDataset);
  }

  // Events datasets
  if (filteredSubjects.events && filteredSubjects.events.length > 0) {
    filteredSubjects.events.forEach((event) => {
      if (!event.startDateTime.length) return;

      const eventMapping = eventTypesChartButtonsMapping.find(
        (mapping) =>
          mapping.type.toLowerCase() === event.eventType.toLowerCase()
      );

      if (eventMapping) {
        const eventDataset = {
          type: 'bar',
          x: event.startDateTime.map((start, index) => {
            const startMs = new Date(start).getTime();
            const endMs = new Date(event.endDateTime[index]).getTime();
            const midpointMs = startMs + (endMs - startMs) / 2;
            return new Date(midpointMs).toISOString();
          }),
          y: new Array(event.startDateTime.length).fill(220),
          marker: { color: eventMapping.color },
          name: eventMapping.name,
          width: event.startDateTime.map(
            (start, index) =>
              new Date(event.endDateTime[index]).getTime() -
              new Date(start).getTime()
          ),
          opacity: 0.6,
        };
        datasets.push(eventDataset);
      }
    });
  }

  return datasets;
}
