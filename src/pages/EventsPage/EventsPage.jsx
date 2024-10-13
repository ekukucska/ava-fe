import { useContext } from 'react';
import StudiesContext from '../../state/StudiesContext';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import CustomButton from '../../components/CustomButton/CustomButton';
import StudiesList from '../../components/StudiesList/StudiesList';
import StudiesFooter from '../../components/StudiesFooter/StudiesFooter';
import { studies } from '../../mockData/mockStudies';

function EventsPage() {
  const {
    compareMultipleStudies,
    setCompareMultipleStudies,
    setSelectedStudies,
  } = useContext(StudiesContext);

  const handleOnClickCompareMultipleStudies = () => {
    if (compareMultipleStudies) {
      setCompareMultipleStudies(false);
      setSelectedStudies([]);
    } else {
      setCompareMultipleStudies(true);
    }
  };

  console.log('EventsPage: compareMultipleStudies:', compareMultipleStudies); // TODO: Remove after testing

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
        <StudiesList studies={studies} showPercentage={true} />
      </MainContentContainer>
      {compareMultipleStudies && <StudiesFooter />}
    </>
  );
}

export default EventsPage;
