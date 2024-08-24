import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function CustomButton({
  color = 'primary',
  variant = 'outlined',
  text,
  startIcon,
  endIcon,
  ...props
}) {
  return (
    <Button
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        height: '2rem',
        borderRadius: '50px',
        textTransform: 'none',
        padding: '0 16px',
        fontSize: '0.875rem',
        fontWeight: 600,
        fontFamily: 'Nunito, sans-serif',
        whiteSpace: 'nowrap',
      }}
      {...props}
    >
      {text}
    </Button>
  );
}

CustomButton.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  text: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

export default CustomButton;
