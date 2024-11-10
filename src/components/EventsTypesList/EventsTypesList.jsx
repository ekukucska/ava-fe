import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import EventTypeBox from '../EventTypeBox/EventTypeBox';
import { eventTypesChartButtonsMapping } from '../../data/eventTypes';
import { eventTypesObjectToMappedArray } from '../../utils/transformers/eventTypesObjectToMappedArray';

const EventsTypesList = ({ studyData, showPercentage }) => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const eventsDataValue = eventTypesObjectToMappedArray(
      studyData,
      eventTypesChartButtonsMapping,
      studyData.totalEvents
    );
    setEventsData(eventsDataValue);
  }, [studyData]);

  console.log('EventsTypesList: studyData.totalEvents:', studyData.totalEvents); // TODO: Remove after testing
  console.log('EventsTypesList: studyData:', studyData); // TODO: Remove after testing
  console.log('EventsTypesList: eventsData:', eventsData); // TODO: Remove after testing

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        justifyContent: { xs: 'center', md: 'flex-start' },
      }}
    >
      {eventsData.map((event) => {
        return (
          <span key={event.eventType}>
            <EventTypeBox
              key={event.eventType}
              number={event.count}
              title={event.name}
              color={event.color}
              isSelectable={false}
              isInteractive={true}
            />
            {showPercentage && (
              <Typography
                variant="caption"
                display="block"
                sx={{ marginTop: 1, textAlign: 'center', alignSelf: 'center' }}
              >
                {`${event.percentage}`}%
              </Typography>
            )}
          </span>
        );
      })}
    </Box>
  );
};

EventsTypesList.propTypes = {
  studyData: PropTypes.shape({
    study: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
    patches: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalEvents: PropTypes.number.isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        eventType: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  showPercentage: PropTypes.bool.isRequired,
};

export default EventsTypesList;
