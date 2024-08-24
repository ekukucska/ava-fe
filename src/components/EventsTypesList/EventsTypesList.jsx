import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import EventTypeBox from '../EventTypeBox/EventTypeBox';
import { eventTypesChartButtonsMapping } from '../../data/eventTypes';

const EventsTypesList = ({ studyData, showPercentage }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}
    >
      {studyData.events.map((event) => {
        const eventTypeData = eventTypesChartButtonsMapping.find(
          (type) => type.type === event.eventType
        );

        return (
          <span key={eventTypeData.type}>
            <EventTypeBox
              key={eventTypeData.type}
              number={event.count}
              title={eventTypeData.name}
              color={eventTypeData.color}
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
    totalEventsCount: PropTypes.number.isRequired,
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
