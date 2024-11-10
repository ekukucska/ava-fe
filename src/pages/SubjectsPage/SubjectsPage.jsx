import React, { useContext, useEffect, useState } from 'react';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import CustomButton from '../../components/CustomButton/CustomButton';
import {
  Typography,
  Box,
  Divider,
  FormControlLabel,
  Checkbox,
  TextField,
  Card,
  CardContent,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';
import WcIcon from '@mui/icons-material/Wc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RefreshIcon from '@mui/icons-material/Refresh';
import SubjectsContext from '../../state/SubjectsContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import SubjectsPlot from '../../components/SubjectsPlot/SubjectsPlot';
import { fetchAggregatedSubjects } from '../../utils/api/aggregatedSubjectsApi';

const SubjectsPage = () => {
  const theme = useTheme();
  const {
    subjectsData,
    setSubjectsData,
    minHeightFilter,
    setMinHeightFilter,
    maxHeightFilter,
    setMaxHeightFilter,
    minWeightFilter,
    setMinWeightFilter,
    maxWeightFilter,
    setMaxWeightFilter,
    maleGenderFilter,
    setMaleGenderFilter,
    femaleGenderFilter,
    setFemaleGenderFilter,
    minAgeFilter,
    setMinAgeFilter,
    maxAgeFilter,
    setMaxAgeFilter,
  } = useContext(SubjectsContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
  }, [subjectsData]);

  const inputStyle = {
    '& .MuiOutlinedInput-input::placeholder': {
      color: theme.palette.ava_dark_grey.main,
    },
    width: '142px',
    borderRadius: '8px',
    color: theme.palette.secondary.main,
    label: {
      color: theme.palette.secondary.main,
    },
  };

  const handleMaleGenderFilterChange = (event) => {
    event.preventDefault();
    setMaleGenderFilter(!maleGenderFilter);
    if (!maleGenderFilter) {
      setFemaleGenderFilter(false);
    }
  };

  const handleFemaleGenderFilterChange = (event) => {
    event.preventDefault();
    setFemaleGenderFilter(!femaleGenderFilter);
    if (!femaleGenderFilter) {
      setMaleGenderFilter(false);
    }
  };

  const handleResetFilters = () => {
    setMinHeightFilter('');
    setMaxHeightFilter('');
    setMinWeightFilter('');
    setMaxWeightFilter('');
    setMaleGenderFilter(false);
    setFemaleGenderFilter(false);
    setMinAgeFilter('');
    setMaxAgeFilter('');
  };

  console.log('SubjectsPage: subjectsData', subjectsData); // TODO: Remove after testing

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <MainContentContainer>
      <Typography variant="subtitle1" sx={{ marginBottom: '1rem' }}>
        Adjust the filters to analyze demographic trends in the subjects&apos;
        data.
      </Typography>

      <Box
        sx={{
          width: '100%',
          padding: '1rem',
          boxShadow: '0px 2px 4px 0px #00000033',
          backgroundColor: theme.palette.white,
          marginBottom: '1.5rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: '700' }}>
            Demographics
          </Typography>

          <CustomButton
            startIcon={<RefreshIcon />}
            text="Reset filters"
            variant="text"
            onClick={handleResetFilters}
          />
        </Box>
        <Divider sx={{ margin: '1rem 0' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            marginBottom: '1rem',
          }}
        >
          {/* Height Column */}
          <Box
            sx={{
              flex: '1 1 25%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1rem',
              paddingLeft: '2rem',
              marginBottom: { xs: '1rem', md: '0' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HeightIcon
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: '20px',
                  marginRight: '8px',
                }}
              />
              <Typography>Height</Typography>
            </Box>
            <TextField
              placeholder="Min height"
              label="Min height"
              variant="outlined"
              type="number"
              value={minHeightFilter || ''}
              onChange={(event) => setMinHeightFilter(event.target.value)}
              sx={inputStyle}
            />
            <TextField
              placeholder="Max height"
              label="Max height"
              variant="outlined"
              type="number"
              value={maxHeightFilter || ''}
              onChange={(event) => setMaxHeightFilter(event.target.value)}
              sx={inputStyle}
            />
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          {/* Weight Column */}
          <Box
            sx={{
              flex: '1 1 25%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1rem',
              paddingLeft: '2rem',
              marginBottom: { xs: '1rem', md: '0' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ScaleIcon
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: '20px',
                  marginRight: '8px',
                }}
              />
              <Typography>Weight</Typography>
            </Box>
            <TextField
              placeholder="Min weight"
              label="Min weight"
              variant="outlined"
              type="number"
              value={minWeightFilter || ''}
              onChange={(event) => setMinWeightFilter(event.target.value)}
              sx={inputStyle}
            />
            <TextField
              placeholder="Max weight"
              label="Max weight"
              variant="outlined"
              type="number"
              value={maxWeightFilter || ''}
              onChange={(event) => setMaxWeightFilter(event.target.value)}
              sx={inputStyle}
            />
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          {/* Gender Column */}
          <Box
            sx={{
              flex: '1 1 25%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1rem',
              paddingLeft: '2rem',
              marginBottom: { xs: '1rem', md: '0' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <WcIcon
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: '20px',
                  marginRight: '8px',
                }}
              />
              <Typography>Gender</Typography>
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="male"
                  checked={maleGenderFilter}
                  onClick={handleMaleGenderFilterChange}
                />
              }
              label={
                <Typography
                  sx={{
                    color: maleGenderFilter
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                  }}
                >
                  Male
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="female"
                  checked={femaleGenderFilter}
                  onClick={handleFemaleGenderFilterChange}
                />
              }
              label={
                <Typography
                  sx={{
                    color: femaleGenderFilter
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                  }}
                >
                  Female
                </Typography>
              }
            />
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          {/* Age Column */}
          <Box
            sx={{
              flex: '1 1 25%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1rem',
              paddingLeft: '2rem',
              marginBottom: { xs: '1rem', md: '0' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarMonthIcon
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: '20px',
                  marginRight: '8px',
                }}
              />
              <Typography>Age</Typography>
            </Box>
            <TextField
              placeholder="Min age"
              label="Min age"
              variant="outlined"
              type="number"
              value={minAgeFilter || ''}
              onChange={(event) => setMinAgeFilter(event.target.value)}
              sx={inputStyle}
            />
            <TextField
              placeholder="Max age"
              label="Max age"
              variant="outlined"
              type="number"
              value={maxAgeFilter || ''}
              onChange={(event) => setMaxAgeFilter(event.target.value)}
              sx={inputStyle}
            />
          </Box>
        </Box>
      </Box>

      <Card
        sx={{
          boxShadow: '0px 2px 4px 0px #00000033',
          width: '100%',
          marginBottom: '3.5rem',
          borderRadius: '4px 0px 0px 0px',
        }}
      >
        <CardContent>
          <SubjectsPlot />
        </CardContent>
      </Card>
    </MainContentContainer>
  );
};

export default SubjectsPage;
