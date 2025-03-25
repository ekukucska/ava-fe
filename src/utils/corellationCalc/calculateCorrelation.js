export function createStartEndObjects(startDateTime, endDateTime) {
  return [
    {
      start: new Date(startDateTime),
      end: new Date(endDateTime),
    },
  ];
}

// Create binary correlation data based on timestamps and intervals
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

// Calculate average correlations across different event types
export function calculateAverageCorrelations(correlationsList) {
  // Group correlations by event type
  const correlationsByType = correlationsList.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = {
        total: 0,
        count: 0,
      };
    }

    // Only add non-null correlations
    if (item.correlation !== null) {
      acc[item.type].total += item.correlation;
      acc[item.type].count++;
    }

    return acc;
  }, {});

  // Calculate average for each event type
  const averageCorrelations = Object.keys(correlationsByType).map((type) => {
    const { total, count } = correlationsByType[type];
    return {
      type: type,
      averageCorrelation: count > 0 ? total / count : null,
    };
  });

  return averageCorrelations;
}

// Main correlation calculation function
export const calculateCorrelation = (glucoseValues, eventValues) => {
  // Validate input
  if (!glucoseValues || !eventValues) {
    console.warn('Invalid input: Missing required arrays');
    return null;
  }

  // Ensure arrays have the same length
  if (glucoseValues.length !== eventValues.length) {
    console.warn('Glucose values and event values have different lengths');
    return null;
  }

  // Remove any NaN or undefined values
  const validIndices = glucoseValues.reduce((acc, value, index) => {
    if (
      value !== null &&
      value !== undefined &&
      eventValues[index] !== null &&
      eventValues[index] !== undefined
    ) {
      acc.push(index);
    }
    return acc;
  }, []);

  // If no valid data points, return null
  if (validIndices.length === 0) {
    console.warn('No valid data points for correlation calculation');
    return null;
  }

  // Filter arrays to include only valid data points
  const filteredGlucoseValues = validIndices.map(
    (index) => glucoseValues[index]
  );
  const filteredEventValues = validIndices.map((index) => eventValues[index]);

  // Calculate mean
  const mean = (arr) => arr.reduce((sum, value) => sum + value, 0) / arr.length;

  const glucoseMean = mean(filteredGlucoseValues);
  const eventMean = mean(filteredEventValues);

  // Calculate deviations
  const glucoseDeviations = filteredGlucoseValues.map(
    (value) => value - glucoseMean
  );
  const eventDeviations = filteredEventValues.map((value) => value - eventMean);

  // Calculate covariance
  const covariance =
    glucoseDeviations.reduce(
      (sum, value, index) => sum + value * eventDeviations[index],
      0
    ) /
    (filteredGlucoseValues.length - 1);

  // Standard deviation function
  const stdDev = (arr) => {
    const meanValue = mean(arr);
    return Math.sqrt(
      arr.reduce((sum, value) => sum + Math.pow(value - meanValue, 2), 0) /
        (arr.length - 1)
    );
  };

  // Calculate standard deviations
  const glucoseStdDev = stdDev(filteredGlucoseValues);
  const eventStdDev = stdDev(filteredEventValues);

  // Check for zero standard deviation
  if (glucoseStdDev === 0 || eventStdDev === 0) {
    console.warn(
      'One of the arrays has zero variance; returning correlation as 0.'
    );
    return 0;
  }

  // Calculate Pearson correlation coefficient
  const correlation = covariance / (glucoseStdDev * eventStdDev);

  return correlation;
};

// Main function to create correlations list
export const createCorrelationsList = (filteredSubjects) => {
  const allSubjectsCorrelationsList = [];

  filteredSubjects.forEach((subject) => {
    subject.events.forEach((event) => {
      // Create start and end objects for the event
      const eventStartEndTimes = createStartEndObjects(
        event.startDateTime,
        event.endDateTime
      );

      // Create binary correlation data based on sensor timestamps and event intervals
      const binaryData = createBinaryCorrelationData(
        subject.sensorData[0].dateTime,
        eventStartEndTimes
      );

      // Calculate correlation
      const correlation = calculateCorrelation(
        subject.sensorData[0].values, // Glucose values
        binaryData // Event binary values
      );

      // Add to correlations list
      allSubjectsCorrelationsList.push({
        type: event.eventType,
        correlation: correlation,
      });
    });
  });

  // Calculate average correlations
  const averageCorrelations = calculateAverageCorrelations(
    allSubjectsCorrelationsList
  );

  return averageCorrelations;
};

// Example usage
const glucoseData = [95, 100, 105];
const eventBinaryArray = [0, 0, 0];

const correlation = calculateCorrelation(glucoseData, eventBinaryArray);
console.log(`Correlation between glucose levels and events: ${correlation}`);
