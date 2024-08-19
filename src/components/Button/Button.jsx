import { Button } from '@mui/material';

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
      {...props} // Spread other props like onClick, etc.
    >
      {text}
    </Button>
  );
}

export default CustomButton;
