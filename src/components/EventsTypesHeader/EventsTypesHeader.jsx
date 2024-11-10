import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Divider } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from '@mui/material/styles';
import StudiesContext from '../../state/StudiesContext';
import SubjectsContext from '../../state/SubjectsContext';
import EventsTypesContext from '../../state/EventsTypesContext';
import CustomButton from '../CustomButton/CustomButton';
import { eventTypesChartButtonsMapping } from '../../data/eventTypes';
import EventTypeBox from '../EventTypeBox/EventTypeBox';
import formatISODateToDayMonth from '../../utils/transformers/formatISODateToDayMonth';
import { countStudiesTotals } from '../../utils/counters/countStudiesTotals';
import { mapEventCounts } from '../../utils/map/mapEventCounts';

function EventsTypesHeader() {
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    studiesList,
    studiesData,
    selectedStudies,
    selectedStudiesTotalCounts,
  } = useContext(StudiesContext);
  const { subjectsData } = useContext(SubjectsContext);
  const {
    selectedEventsTypes,
    setSelectedEventsTypes,
    showAllSubjects,
    setShowAllSubjects,
  } = useContext(EventsTypesContext);

  const [studiesListTotalCounts, setStudiesListTotalCounts] = useState({});
  const [mappedEvents, setMappedEvents] = useState([]);

  useEffect(() => {
    const newTotals = countStudiesTotals(
      selectedStudies,
      studiesData,
      subjectsData
    );
    setStudiesListTotalCounts(newTotals);
  }, [selectedStudies, studiesData, subjectsData]);

  useEffect(() => {
    console.log('Current studiesListTotalCounts:', studiesListTotalCounts);
    const mappedData = mapEventCounts(
      studiesListTotalCounts,
      eventTypesChartButtonsMapping
    );
    setMappedEvents(mappedData);
  }, [studiesListTotalCounts, eventTypesChartButtonsMapping]);

  useEffect(() => {
    console.log('EventsTypesHeader: selectedEventsTypes:', selectedEventsTypes); // TODO: Remove after testing
  }, [selectedEventsTypes]);

  console.log(
    'EventsTypesHeader: studiesListTotalCounts:',
    studiesListTotalCounts
  ); // TODO: Remove after testing

  const handleOnClickBackCarret = () => {
    navigate('/events');
  };

  const handleOnClickShowAllSubjects = () => {
    setShowAllSubjects((prevShowAllSubjects) => !prevShowAllSubjects);
  };

  const handleOnClickEventTypeBox = (type) => {
    console.log(`EventsTypesHeader: EventTypeBox clicked: ${type}`); // TODO: Replace with proper logic
    setSelectedEventsTypes((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((selectedType) => selectedType !== type)
        : [...prevSelected, type]
    );
  };

  console.log(
    'EventsTypesHeader: selectedStudiesTotalCounts:',
    selectedStudiesTotalCounts
  ); // TODO: Remove after testing
  console.log('EventsTypesHeader: selectedStudies:', selectedStudies); // TODO: Remove after testing
  console.log(
    'EventsTypesHeader: selectedStudiesTotalCounts:',
    selectedStudiesTotalCounts
  ); // TODO: Remove after testing
  console.log('EventsTypesHeader: studiesList:', studiesList); // TODO: Remove after testing
  console.log('EventsTypesHeader: studiesData:', studiesData); // TODO: Remove after testing
  console.log('EventsTypesHeader: subjectsData:', subjectsData); // TODO: Remove after testing
  console.log('EventsTypesHeader: mappedEvents:', mappedEvents); // TODO: Remove after testing
  console.log('EventsTypesHeader: selectedEventsTypes:', selectedEventsTypes); // TODO: Remove after testing
  console.log(
    'EventsTypesHeader: studiesListTotalCounts:',
    studiesListTotalCounts
  ); // TODO: Remove after testing

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
          {`${formatISODateToDayMonth(
            studiesListTotalCounts.earliestStartDate
          )} - ${formatISODateToDayMonth(studiesListTotalCounts.latestEndDate)}`}
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
        <Typography variant="caption">EVENTS</Typography>
        <Typography variant="h4">
          {studiesListTotalCounts.totalEvents}
        </Typography>
        <Typography variant="caption">ANOMALIES</Typography>
        <Typography variant="h4">
          {studiesListTotalCounts.totalAnomalies}
        </Typography>
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
        {mappedEvents.map((eventType) => (
          <Box
            key={`box-${eventType.type}`}
            sx={{ cursor: 'pointer' }}
            onClick={() => handleOnClickEventTypeBox(eventType.type)}
          >
            <EventTypeBox
              number={eventType.count}
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
        text="Show all subjects"
        variant={showAllSubjects ? 'contained' : 'outlined'}
        startIcon={<PersonSearchIcon />}
        sx={{
          height: '3rem',
          padding: { xs: '0 16px', sm: '0 32px' },
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        onClick={handleOnClickShowAllSubjects}
      />
    </Box>
  );
}

export default EventsTypesHeader;
