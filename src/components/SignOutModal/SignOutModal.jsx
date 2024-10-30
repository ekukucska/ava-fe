import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import CustomButton from '../CustomButton/CustomButton';

function SignOutModal({ open, onClose, onSignOut }) {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="signout-dialog-title"
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '8px',
          minWidth: '400px',
          width: ' 672px',
          textAlign: 'center',
          margin: '0px',
        },
      }}
    >
      <DialogTitle
        id="signout-dialog-title"
        sx={{
          fontWeight: 'bold',
          fontSize: theme.typography.subtitle3.fontSize,
          color: theme.palette.secondary.main,
          alignSelf: 'left',
          textAlign: 'left',
          justifyContent: 'flex-start',
          padding: '24px',
        }}
      >
        Sign out
      </DialogTitle>
      <Divider
        sx={{
          backgroundColor: theme.palette.ava_light_blue.main,
          borderColor: theme.palette.ava_light_blue.main,
        }}
      />

      <DialogContent
        sx={{ display: 'flex', justifyContent: 'flex-start', padding: '24px' }}
      >
        <Typography variant="body2" sx={{ justifyContent: 'flex-start' }}>
          Are you sure you want to sign out?
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 1.5,
          padding: '24px',
          backgroundColor: theme.palette.ava_light_blue_two.main,
        }}
      >
        <CustomButton
          text="Cancel"
          variant="outlined"
          sx={{ height: '40px', width: '118px' }}
          onClick={onClose}
        />
        <CustomButton
          text="Sign out"
          variant="contained"
          sx={{ height: '40px', width: '118px' }}
          onClick={onSignOut}
        />
      </DialogActions>
    </Dialog>
  );
}
SignOutModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default SignOutModal;
