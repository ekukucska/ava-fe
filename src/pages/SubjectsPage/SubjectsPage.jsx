import React, { useContext } from 'react';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import CustomButton from '../../components/CustomButton/CustomButton';
import {
  Typography,
  Box,
  Divider,
  FormControlLabel,
  Checkbox,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';
import WcIcon from '@mui/icons-material/Wc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RefreshIcon from '@mui/icons-material/Refresh';
import SubjectsContext from '../../state/SubjectsContext';
import SubjectsPlot from '../../components/SubjectsPlot/SubjectsPlot';

const SubjectsPage = () => {
  const theme = useTheme();
  const {
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

  return (
    <MainContentContainer>
      <Typography variant="subtitle1" sx={{ marginBottom: '1rem' }}>
        Please select the demographic data on which you would like to perform a
        pattern search below
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

      <Typography variant="subtitle1">Subjects Data Plots</Typography>
      <SubjectsPlot />
    </MainContentContainer>
  );
};

export default SubjectsPage;
