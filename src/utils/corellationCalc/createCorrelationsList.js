import { createStartEndObjects } from './createStartEndObjects';
import { createBinaryCorrelationData } from './createBinaryCorrelationData';
import { calculateCorrelation } from './calculateCorrelation';
import { calculateAverageCorrelations } from './calculateAverageCorrelations';

export const createCorrelationsList = (filteredSubjects) => {
  const allSubjectsCorrelationsList = [];

  filteredSubjects.forEach((subject) => {
    subject.events.forEach((event) => {
      const eventStartEndTimes = createStartEndObjects(
        event.startDateTime,
        event.endDateTime
      );

      const binaryData = createBinaryCorrelationData(
        subject.sensorData[0].dateTime,
        eventStartEndTimes
      );

      const correlation = calculateCorrelation(
        subject.sensorData[0].values,
        binaryData
      );

      allSubjectsCorrelationsList.push({
        type: event.eventType,
        correlation: correlation,
      });
    });
  });

  const averageCorrelations = calculateAverageCorrelations(
    allSubjectsCorrelationsList
  );

  return averageCorrelations;
};
