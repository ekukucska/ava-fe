export const filterSubjectsByDemographicData = (
  subjectsData,
  minHeightFilter,
  maxHeightFilter,
  minWeightFilter,
  maxWeightFilter,
  maleGenderFilter,
  femaleGenderFilter,
  minAgeFilter,
  maxAgeFilter
) => {
  return subjectsData.filter((subject) => {
    let isValid = true;

    const isValidNumber = (value) => typeof value === 'number' && !isNaN(value);

    if (
      isValidNumber(minHeightFilter) &&
      minHeightFilter !== 0 &&
      subject.subjectData.height < minHeightFilter
    ) {
      isValid = false;
    }
    if (
      isValidNumber(maxHeightFilter) &&
      maxHeightFilter !== 0 &&
      subject.subjectData.height > maxHeightFilter
    ) {
      isValid = false;
    }

    if (
      isValidNumber(minWeightFilter) &&
      minWeightFilter !== 0 &&
      subject.subjectData.weight < minWeightFilter
    ) {
      isValid = false;
    }
    if (
      isValidNumber(maxWeightFilter) &&
      maxWeightFilter !== 0 &&
      subject.subjectData.weight > maxWeightFilter
    ) {
      isValid = false;
    }

    if (maleGenderFilter === true && subject.subjectData.gender !== 'male') {
      isValid = false;
    }
    if (
      femaleGenderFilter === true &&
      subject.subjectData.gender !== 'female'
    ) {
      isValid = false;
    }

    if (
      isValidNumber(minAgeFilter) &&
      minAgeFilter !== 0 &&
      subject.subjectData.age < minAgeFilter
    ) {
      isValid = false;
    }
    if (
      isValidNumber(maxAgeFilter) &&
      maxAgeFilter !== 0 &&
      subject.subjectData.age > maxAgeFilter
    ) {
      isValid = false;
    }

    return isValid;
  });
};
