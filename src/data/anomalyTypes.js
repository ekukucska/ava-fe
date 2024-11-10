export const allAnomalyTypes = [
  'Permanent drift',
  'Low sensitivity',
  'Drawn (attached)',
  'Drawn (detached)',
  'Noise',
  'Initial suppression',
  'Temp. low sensitivity',
  'Dropout',
  'Run-in',
  'Error',
  'Suppression',
  'Anomaly',
];

export const anomalyTypesChartButtonsMapping = [
  { index: 0, name: 'Perm. drift', color: '#FA4D56' },
  { index: 1, name: 'Low sensitivity', color: '#9F1853' },
  { index: 2, name: 'Drawn attached', color: '#6929C4' },
  { index: 3, name: 'Drawn detached', color: '#009D9A' },
  { index: 4, name: 'Noise', color: '#EE5396' },
  { index: 5, name: 'Init. suppression', color: '#005D5D' },
  { index: 6, name: 'Temp. low sensitivity', color: '#520408' },
  { index: 7, name: 'Dropout', color: '#002D9C' },
  { index: 8, name: 'Run-in', color: '#B28600' },
  { index: 9, name: 'Error', color: '#A56EFF' },
  { index: 10, name: 'Suppression', color: '#30D5C8' },
  { index: 11, name: 'Anomaly', color: '#1E90FF' },
];

export const anomalyMapForSubjectsPlot = {
  index: 10,
  type: 'anomalies',
  name: 'Anomalies',
  color: '#A9A9A9',
};
