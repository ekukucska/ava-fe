export const filterSubjectsByStudies = (subjectsData, selectedStudies) => {
  if (!Array.isArray(selectedStudies) || !Array.isArray(subjectsData)) {
    throw new Error('Both parameters must be arrays');
  }

  if (selectedStudies.length === 0 || subjectsData.length === 0) {
    return [];
  }

  const studiesSet = new Set(selectedStudies);

  return subjectsData.filter((subject) => studiesSet.has(subject.study));
};

const selectedStudies = ['ST-001'];
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
    ],
    events: [
      {
        eventType: 'Insulin',
        startDateTime: ['2024-01-01T08:00:00Z'],
        endDateTime: ['2024-01-01T08:30:00Z'],
      },
    ],
  },
];

const filteredSubjects = filterSubjectsByStudies(subjectsData, selectedStudies);
console.log(filteredSubjects);
