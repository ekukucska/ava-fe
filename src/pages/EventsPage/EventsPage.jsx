import { useContext } from 'react';
import StudiesContext from '../../state/StudiesContext';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomButton from '../../components/Button/Button';
import StudiesList from '../../components/StudiesList/StudiesList';
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          padding: '2.5rem',
        }}
        maxWidth="1500px"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1">Events Page</Typography>
          <CustomButton
            startIcon={<VisibilityOutlinedIcon />}
            text="Compare multiple studies"
            variant="outlined"
            onClick={handleOnClickCompareMultipleStudies}
          />
        </Box>
        <StudiesList studies={studies} showPercentage={true} />
      </Box>
    </>
  );
}

export default EventsPage;
