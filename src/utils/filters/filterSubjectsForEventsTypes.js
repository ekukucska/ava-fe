import { filterSubjectsByStudies } from './filterSubjectsBySelectedStudies';
import { filterSubjectsByEventTypes } from './filterSubjectsBySelectedEventsTypes';

export function filterSubjectsForEventTypes(
  subjectsData,
  selectedStudies,
  selectedEventsTypes,
  showAllSubjects
) {
  let filteredSubjects = [];

  const subjectsFilteredForStudies = filterSubjectsByStudies(
    subjectsData,
    selectedStudies
  );

  if (showAllSubjects) {
    filteredSubjects = subjectsFilteredForStudies;
  } else {
    filteredSubjects = filterSubjectsByEventTypes(
      subjectsFilteredForStudies,
      selectedEventsTypes
    );
  }

  return filteredSubjects;
}
