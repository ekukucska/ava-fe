import { useContext, useState } from 'react';
import EventTypesContext from '../../state/EventsTypesContext';
import { Card, Typography, Box, Button } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EventsPlot from '../EventsPlot/EventsPlot';
import { eventTypesChartButtonsMapping } from '../../data/eventTypes';
import createOrderedSelectedEventTypes from '../../utils/constructors/createOrderedSelectedEventTypes';
import { useTheme } from '@mui/material/styles';

const StudyCard = () => {
  const { selectedEventsTypes } = useContext(EventTypesContext);
  const [open, setOpen] = useState(false);
  const [reset, setReset] = useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleResetGraph = () => {
    setReset((prevReset) => !prevReset);
  };

  return (
    <Card
      sx={{
        width: '100%',
        minHeight: 108,
        padding: 2,
        boxShadow: 3,
        marginBottom: 4,
      }}
    >
      {/* Card Header */}
      <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
        {/* Header First Row */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Study/Subject Info with Icon and Device type */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: `${theme.palette.ava_dark_grey.main}`,
            }}
          >
            <InfoOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            <Typography
              variant="body1"
              sx={{
                color: `${theme.palette.ava_dark_grey.main}`,
                fontWeight: '600',
              }}
            >
              Subject: 01-001 / Study: ST-01
            </Typography>
            <Box
              sx={{
                backgroundColor: `${theme.palette.ava_light_blue.main}`,
                padding: '4px 8px',
                borderRadius: 2,
                display: 'inline-block',
                ml: 4,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: `${theme.palette.ava_dark_grey.main}` }}
              >
                Device type: unknown
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Header Second Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 1,
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            {createOrderedSelectedEventTypes(
              selectedEventsTypes,
              eventTypesChartButtonsMapping
            ).map((type) => {
              const eventType = eventTypesChartButtonsMapping.find(
                (event) => event.type === type
              );
              return eventType ? (
                <Box
                  key={eventType.index}
                  sx={{
                    backgroundColor: eventType.color,
                    borderRadius: 2,
                    padding: '2px 8px',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: `${theme.palette.white}` }}
                  >
                    {eventType.name}
                  </Typography>
                </Box>
              ) : null;
            })}
          </Box>
          <Button
            onClick={handleClickOpen}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: `${theme.palette.primary.main}`,
            }}
          >
            {open ? (
              <ArrowDropUpIcon sx={{ mr: 0.5 }} />
            ) : (
              <ArrowDropDownIcon sx={{ mr: 0.5 }} />
            )}
            {open ? 'Close' : 'Open'}
          </Button>
        </Box>
      </Box>
      {/* Card Body */}
      {open && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
            borderTop: `1px solid ${theme.palette.ava_light_blue.main}`,
          }}
        >
          {/* Body First Row */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Button
              onClick={handleResetGraph}
              sx={{
                ml: 0.5,
                color: `${theme.palette.primary.main}`,
                textTransform: 'none',
              }}
              startIcon={<RefreshIcon />}
            >
              Reset graph
            </Button>
          </Box>
          {/* Body Second Row - Plot */}
          <Box
            sx={{
              flexGrow: 1,
              width: '100%',
              border: 'none',
              boxShadow: 0,
              padding: 0,
              margin: 0,
              overflow: 'hidden',
            }}
          >
            <EventsPlot reset={reset} style={{ width: '100%' }} />
          </Box>
        </Box>
      )}
    </Card>
  );
};

export default StudyCard;
