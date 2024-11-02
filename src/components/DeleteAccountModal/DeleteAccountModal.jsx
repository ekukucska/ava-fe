import { useContext } from 'react';
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
import ModalsContext from '../../state/ModalsContext';
import CustomButton from '../CustomButton/CustomButton';

function DeleteAccountModal() {
  const theme = useTheme();

  const { openDeleteAccountModal, setOpenDeleteAccountModal } =
    useContext(ModalsContext);

  const onClose = () => {
    setOpenDeleteAccountModal(false);
  };

  const onCancel = () => {
    setOpenDeleteAccountModal(false);
  };

  const onDelete = () => {
    setOpenDeleteAccountModal(false);
  };

  return (
    <Dialog
      open={openDeleteAccountModal}
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
        Delete Account
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
          Are you sure you want to delete your account?
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
          onClick={onCancel}
        />
        <CustomButton
          text="Delete"
          variant="contained"
          sx={{ height: '40px', width: '118px' }}
          onClick={onDelete}
        />
      </DialogActions>
    </Dialog>
  );
}
DeleteAccountModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteAccountModal;
