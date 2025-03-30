export const countStudiesTotalsWithStudyDetails = (
  studyList,
  studiesData,
  subjectsData
) => {
  // Initialize result object with default values
  const result = {
    studyName: studyList[0],
    totalParticipants: 0,
    totalAnomalies: 0,
    totalEvents: 0,
    eventTypeTotals: {
      Insulin: 0,
      Medication: 0,
      Food: 0,
      Alcohol: 0,
      Exercise: 0,
      Sleep: 0,
      Stress: 0,
      Pain: 0,
      Caffeine: 0,
      Smoking: 0,
    },
    earliestStartDate: null,
    latestEndDate: null,
    status: '',
  };

  // Guard against undefined or null inputs
  if (!studyList || !subjectsData || !studiesData) {
    console.warn(
      'countStudiesTotalsWithStudyDetails: Null or undefined inputs',
      {
        studyList,
        subjectsData,
        studiesData,
      }
    );
    return result;
  }

  if (
    !Array.isArray(studyList) ||
    !Array.isArray(subjectsData) ||
    !Array.isArray(studiesData)
  ) {
    console.warn('countStudiesTotalsWithStudyDetails: Inputs are not arrays', {
      studyListType: typeof studyList,
      subjectsDataType: typeof subjectsData,
      studiesDataType: typeof studiesData,
    });
    return result;
  }

  // Create a Set for faster lookup of valid study IDs
  const validStudies = new Set(studyList);
  console.log('Valid studies:', Array.from(validStudies));

  // Filter studies to only include those in studyList
  const relevantStudies = studiesData.filter((study) =>
    validStudies.has(study.name)
  );

  console.log('Relevant studies found:', relevantStudies.length);

  // Process only the relevant studies to find earliest startDate and latest endDate
  // and to get the status of the first study
  relevantStudies.forEach((study) => {
    // If this is the first study in studyList, get its status
    if (study.name === studyList[0] && study.status) {
      result.status = study.status;
    }

    if (study.startDate && study.endDate) {
      const startDate = new Date(study.startDate);
      const endDate = new Date(study.endDate);

      if (
        !result.earliestStartDate ||
        startDate < new Date(result.earliestStartDate)
      ) {
        result.earliestStartDate = startDate.toISOString();
      }

      if (!result.latestEndDate || endDate > new Date(result.latestEndDate)) {
        result.latestEndDate = endDate.toISOString();
      }
    }
  });

  console.log('Earliest start date:', result.earliestStartDate);
  console.log('Latest end date:', result.latestEndDate);

  // Filter and process only subjects from specified studies
  const relevantSubjects = subjectsData.filter((subject) =>
    validStudies.has(subject?.study)
  );

  console.log('Relevant subjects found:', relevantSubjects.length);

  // Calculate totals
  relevantSubjects.forEach((subject, index) => {
    console.log(`Processing subject ${index + 1}/${relevantSubjects.length}`);

    // Count participants
    if (subject.subject) {
      result.totalParticipants += 1;
      console.log('Counted participant:', subject.subject);
    }

    // Count anomalies
    if (Array.isArray(subject.anomalies)) {
      const anomalyCount = subject.anomalies.length;
      result.totalAnomalies += anomalyCount;
      console.log('Counted anomalies:', anomalyCount);
    }

    // Process events
    if (Array.isArray(subject.events)) {
      console.log('Processing events array of length:', subject.events.length);

      subject.events.forEach((event) => {
        if (event.eventType && Array.isArray(event.startDateTime)) {
          const eventCount = event.startDateTime.length;
          result.totalEvents += eventCount;

          if (
            Object.prototype.hasOwnProperty.call(
              result.eventTypeTotals,
              event.eventType
            )
          ) {
            result.eventTypeTotals[event.eventType] += eventCount;
            console.log(
              `Counted ${eventCount} events of type ${event.eventType}`
            );
          } else {
            console.warn(`Unknown event type encountered: ${event.eventType}`);
          }
        } else {
          console.warn('Invalid event structure:', event);
        }
      });
    }
  });

  // Final results logging
  console.log('Final results:', {
    totalParticipants: result.totalParticipants,
    totalAnomalies: result.totalAnomalies,
    totalEvents: result.totalEvents,
    eventTypeTotals: result.eventTypeTotals,
    earliestStartDate: result.earliestStartDate,
    latestEndDate: result.latestEndDate,
    status: result.status,
  });

  return result;
};
