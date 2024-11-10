import { useContext, useEffect, useState } from 'react';
import StudiesContext from '../../state/StudiesContext';
import SubjectsContext from '../../state/SubjectsContext';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import CustomButton from '../../components/CustomButton/CustomButton';
import StudiesList from '../../components/StudiesList/StudiesList';
import StudiesFooter from '../../components/StudiesFooter/StudiesFooter';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { countStudiesTotals } from '../../utils/counters/countStudiesTotals';
import { countStudiesTotalsWithStudyDetails } from '../../utils/counters/countStudiesTotalsWithStudyDetails';
import { studies } from '../../mockData/mockStudies';
import { fetchAggregatedStudies } from '../../utils/api/aggregatedStudiesApi';
import { fetchAggregatedSubjects } from '../../utils/api/aggregatedSubjectsApi';

function EventsPage() {
  const {
    studiesList,
    setStudiesList,
    studiesData,
    setStudiesData,
    compareMultipleStudies,
    setCompareMultipleStudies,
    selectedStudies,
    setSelectedStudies,
    selectedStudiesTotalCounts,
    setSelectedStudiesTotalCounts,
  } = useContext(StudiesContext);
  const { subjectsData, setSubjectsData } = useContext(SubjectsContext);

  const [studiesListTotalCounts, setStudiesListTotalCounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!studiesData || studiesData.length === 0) {
          const data = await fetchAggregatedStudies();
          setStudiesData(data);
        }
        if (!subjectsData || subjectsData.length === 0) {
          const subjects = await fetchAggregatedSubjects();
          setSubjectsData(subjects);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [studiesData, subjectsData, setStudiesData, setSubjectsData]);

  useEffect(() => {
    const studiesListValue = studiesData.map((study) => study.name);
    setStudiesList(studiesListValue);
  }, [studiesData]);

  useEffect(() => {
    const newTotals = countStudiesTotals(
      selectedStudies,
      studiesData,
      subjectsData
    );
    setSelectedStudiesTotalCounts(newTotals);
  }, [studiesList, subjectsData, selectedStudies]);

  useEffect(() => {
    const fetchCountsForStudies = () => {
      const counts = studiesList.map((studyName) => {
        console.log('Event Page: fetchCountsForStudies: studyName:', studyName); // TODO: Remove after testing
        return countStudiesTotalsWithStudyDetails(
          [studyName],
          studiesData,
          subjectsData
        );
      });
      setStudiesListTotalCounts(counts);
      console.log('Event Page: fetchCountsForStudies: counts:', counts); // TODO: Remove after testing
    };

    if (studiesList.length && studiesData.length && subjectsData.length) {
      fetchCountsForStudies();
    }
  }, [studiesList, studiesData, subjectsData]);

  const handleOnClickCompareMultipleStudies = () => {
    if (compareMultipleStudies) {
      setCompareMultipleStudies(false);
      setSelectedStudies([]);
    } else {
      setCompareMultipleStudies(true);
    }
  };

  console.log('Event Page: studiesListTotalCounts:', studiesListTotalCounts); // TODO: Remove after testing
  console.log('Event Page: studiesList:', studiesList); // TODO: Remove after testing
  console.log('Event Page: studiesData:', studiesData); // TODO: Remove after testing
  console.log('Event Page: subjectsData:', subjectsData); // TODO: Remove after testing
  console.log(
    'Event Page: selectedStudiesTotalCounts:',
    selectedStudiesTotalCounts
  ); // TODO: Remove after testing
  console.log('Event Page: selectedStudies:', selectedStudies); // TODO: Remove after testing

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <MainContentContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
            Events Page
          </Typography>
          <CustomButton
            startIcon={<VisibilityOutlinedIcon />}
            text="Compare multiple studies"
            variant="outlined"
            onClick={handleOnClickCompareMultipleStudies}
          />
        </Box>
        <StudiesList studies={studiesListTotalCounts} showPercentage={true} />
      </MainContentContainer>
      {compareMultipleStudies && <StudiesFooter />}
    </>
  );
}

export default EventsPage;
