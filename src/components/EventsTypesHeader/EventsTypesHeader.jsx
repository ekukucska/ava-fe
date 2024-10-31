import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Divider } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from '@mui/material/styles';
import EventsTypesContext from '../../state/EventsTypesContext';
import CustomButton from '../CustomButton/CustomButton';
import { eventTypesChartButtonsMapping } from '../../data/eventTypes';
import EventTypeBox from '../EventTypeBox/EventTypeBox';

function EventsTypesHeader() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { selectedStudies, selectedEventsTypes, setSelectedEventsTypes } =
    useContext(EventsTypesContext);

  const handleOnClickBackCarret = () => {
    navigate('/events');
  };

  const handleOnClickPinSelection = () => {
    console.log(
      'EventsTypesHeader: handleOnClickPinSelection: Pin this selection'
    ); // TODO: Replace with proper logic
  };

  const handleOnClickEventTypeBox = (type) => {
    console.log(`EventsTypesHeader: EventTypeBox clicked: ${type}`); // TODO: Replace with proper logic
    setSelectedEventsTypes((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((selectedType) => selectedType !== type)
        : [...prevSelected, type]
    );
  };

  useEffect(() => {
    console.log('EventsTypesHeader: selectedEventsTypes:', selectedEventsTypes); // TODO: Remove after testing
  }, [selectedEventsTypes]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '0px',
        padding: '7px 20px',
        boxShadow: `0 5px 0 0 ${theme.palette.ava_grey.main}`,
        boxSizing: 'border-box',
        gap: { xs: '1rem', sm: '2rem' },
      }}
    >
      <ArrowBackIosIcon
        fontSize="medium"
        color="secondary"
        onClick={handleOnClickBackCarret}
        sx={{ cursor: 'pointer' }}
      />

      <Box
        sx={{
          marginLeft: { xs: 0, sm: 2 },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Typography variant="body1">Selected studies</Typography>
        <Typography variant="body2" color="black">
          30 oct - 30 nov
        </Typography>
      </Box>

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          display: { xs: 'none', sm: 'block' },
          marginLeft: 2,
          marginRight: 2,
          backgroundColor: theme.palette.ava_light_blue.main,
          borderColor: theme.palette.ava_light_blue.main,
        }}
      />

      <Box
        sx={{
          marginLeft: { xs: 0, sm: 2 },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Typography variant="caption">PATCHES</Typography>
        <Typography variant="h4">34</Typography>
        <Typography variant="caption">EVENTS</Typography>
        <Typography variant="h4">234</Typography>
      </Box>

      <Box
        sx={{
          marginLeft: { xs: 0, sm: 2 },
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexWrap: 'wrap',
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        {eventTypesChartButtonsMapping.map((eventType) => (
          <Box
            key={`box-${eventType.type}`}
            sx={{ cursor: 'pointer' }}
            onClick={() => handleOnClickEventTypeBox(eventType.type)}
          >
            <EventTypeBox
              number={0}
              title={eventType.name}
              color={eventType.color}
              isSelectable={true}
              isSelected={selectedEventsTypes.includes(eventType.type)}
              isInteractive={true}
            />
          </Box>
        ))}
      </Box>

      <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
        <Typography variant="caption">SELECTED</Typography>
        <Typography variant="h4">{selectedEventsTypes.length}</Typography>{' '}
      </Box>

      <CustomButton
        text="Pin this selection"
        variant="outlined"
        startIcon={<PushPinIcon />}
        sx={{
          height: '3rem',
          padding: { xs: '0 16px', sm: '0 32px' },
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        onClick={handleOnClickPinSelection}
      />
    </Box>
  );
}

export default EventsTypesHeader;
