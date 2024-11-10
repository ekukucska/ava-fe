export const filterSubjectsByEventTypes = (
  subjectsData,
  selectedEventTypes
) => {
  const normalizedSelectedTypes = selectedEventTypes.map((type) =>
    type.toLowerCase()
  );

  return subjectsData.filter((subject) => {
    if (!Array.isArray(subject.events)) {
      return false;
    }

    return subject.events.some((event) => {
      if (!event.eventType || !Array.isArray(event.startDateTime)) {
        return false;
      }

      return (
        normalizedSelectedTypes.includes(event.eventType.toLowerCase()) &&
        event.startDateTime.length > 0
      );
    });
  });
};

const selectedEventTypes = ['insulin'];
const subjectsData = [
  {
    _id: '6714251022ad0062ee5ab0ce',
    study: 'ST-001',
    subject: 'SB-001',
    subjectData: {
      gender: 'male',
      age: 34,
      weight: 80,
      height: 180,
      BMI: 24.7,
    },
    sensorData: [
      {
        type: 'cgm',
        dateTime: [
          '2024-01-01T08:00:00Z',
          '2024-01-01T09:00:00Z',
          '2024-01-01T10:00:00Z',
        ],
        values: [95, 100, 105],
      },
    ],
    anomalies: [
      {
        anomalyType: 'Noise',
        startDateTime: '2024-03-12T00:00:00Z',
        endDateTime: '2024-08-28T23:59:59Z',
      },
      {
        anomalyType: 'Drawn detached',
        startDateTime: '2024-01-15T00:00:00Z',
        endDateTime: '2024-10-22T23:59:59Z',
      },
      {
        anomalyType: 'Temp. low sensitivity',
        startDateTime: '2024-07-05T00:00:00Z',
        endDateTime: '2024-12-18T23:59:59Z',
      },
    ],
    events: [
      {
        eventType: 'Insulin',
        startDateTime: [
          '2024-01-01T08:00:00Z',
          '2024-01-02T08:00:00Z',
          '2024-01-03T08:00:00Z',
          '2024-01-04T08:00:00Z',
        ],
        endDateTime: [
          '2024-01-01T08:30:00Z',
          '2024-01-02T08:30:00Z',
          '2024-01-03T08:30:00Z',
          '2024-01-04T08:30:00Z',
        ],
      },
      {
        eventType: 'Medication',
        startDateTime: [
          '2024-01-01T09:00:00Z',
          '2024-01-02T09:00:00Z',
          '2024-01-03T09:00:00Z',
        ],
        endDateTime: [
          '2024-01-01T09:30:00Z',
          '2024-01-02T09:30:00Z',
          '2024-01-03T09:30:00Z',
        ],
      },
      {
        eventType: 'Food',
        startDateTime: [
          '2024-01-01T12:00:00Z',
          '2024-01-02T12:00:00Z',
          '2024-01-03T12:00:00Z',
        ],
        endDateTime: [
          '2024-01-01T12:30:00Z',
          '2024-01-02T12:30:00Z',
          '2024-01-03T12:30:00Z',
        ],
      },
      {
        eventType: 'Alcohol',
        startDateTime: [],
        endDateTime: [],
      },
      {
        eventType: 'Exercise',
        startDateTime: [
          '2024-01-02T07:00:00Z',
          '2024-01-03T07:00:00Z',
          '2024-01-04T07:00:00Z',
        ],
        endDateTime: [
          '2024-01-02T08:00:00Z',
          '2024-01-03T08:00:00Z',
          '2024-01-04T08:00:00Z',
        ],
      },
      {
        eventType: 'Sleep',
        startDateTime: [
          '2024-01-02T23:00:00Z',
          '2024-01-03T23:00:00Z',
          '2024-01-04T23:00:00Z',
        ],
        endDateTime: [
          '2024-01-03T07:00:00Z',
          '2024-01-04T07:00:00Z',
          '2024-01-05T07:00:00Z',
        ],
      },
      {
        eventType: 'Stress',
        startDateTime: [
          '2024-01-03T09:00:00Z',
          '2024-01-04T09:00:00Z',
          '2024-01-05T09:00:00Z',
        ],
        endDateTime: [
          '2024-01-03T10:00:00Z',
          '2024-01-04T10:00:00Z',
          '2024-01-05T10:00:00Z',
        ],
      },
      {
        eventType: 'Pain',
        startDateTime: [
          '2024-01-03T11:00:00Z',
          '2024-01-04T11:00:00Z',
          '2024-01-05T11:00:00Z',
        ],
        endDateTime: [
          '2024-01-03T12:00:00Z',
          '2024-01-04T12:00:00Z',
          '2024-01-05T12:00:00Z',
        ],
      },
      {
        eventType: 'Caffeine',
        startDateTime: [
          '2024-01-03T15:00:00Z',
          '2024-01-04T15:00:00Z',
          '2024-01-05T15:00:00Z',
        ],
        endDateTime: [
          '2024-01-03T15:30:00Z',
          '2024-01-04T15:30:00Z',
          '2024-01-05T15:30:00Z',
        ],
      },
      {
        eventType: 'Smoking',
        startDateTime: [
          '2024-01-03T18:00:00Z',
          '2024-01-04T18:00:00Z',
          '2024-01-05T18:00:00Z',
        ],
        endDateTime: [
          '2024-01-03T18:30:00Z',
          '2024-01-04T18:30:00Z',
          '2024-01-05T18:30:00Z',
        ],
      },
    ],
  },
];

console.log(filterSubjectsByEventTypes(subjectsData, selectedEventTypes));
