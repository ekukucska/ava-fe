import { useContext, useState } from 'react';
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
import userApiUtils from '../../utils/api/userApiUtils';

function DeleteAccountModal() {
  const theme = useTheme();
  const { openDeleteAccountModal, setOpenDeleteAccountModal } =
    useContext(ModalsContext);

  const [deleteSuccessfull, setDeleteSuccessfull] = useState(false);
  const [deletionError, setDeletionError] = useState('');

  const onClose = () => {
    setOpenDeleteAccountModal(false);
    setDeleteSuccessfull(false);
    setDeletionError(''); // Reset error state on close
  };

  const onCancel = () => {
    setOpenDeleteAccountModal(false);
  };

  const onDelete = async () => {
    try {
      // Replace with the actual user's email you want to delete
      const userEmail = 'user@example.com'; // Retrieve the user's email as needed
      await userApiUtils.deleteUser(userEmail);
      setDeleteSuccessfull(true);
      setDeletionError('');
    } catch (error) {
      console.error('Error deleting account:', error);
      setDeletionError('Failed to delete account. Please try again.');
      setDeleteSuccessfull(false); // Ensure deleteSuccessfull is false on error
    }
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
          width: '672px',
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
        sx={{ display: 'flex', flexDirection: 'flex-start', padding: '24px' }}
      >
        {deleteSuccessfull ? (
          <Typography variant="body2" sx={{ color: 'secondary.main' }}>
            Account deleted successfully!
          </Typography>
        ) : deletionError ? (
          <Typography variant="body2" sx={{ color: theme.palette.error.main }}>
            {deletionError}
          </Typography>
        ) : (
          <Typography variant="body2" sx={{ justifyContent: 'flex-start' }}>
            Are you sure you want to delete your account?
          </Typography>
        )}
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
        {deletionError ? (
          <CustomButton
            text="Close"
            variant="contained"
            sx={{ height: '40px', width: '118px' }}
            onClick={onClose}
          />
        ) : (
          <>
            {!deleteSuccessfull ? (
              <>
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
              </>
            ) : (
              <CustomButton
                text="Close"
                variant="contained"
                sx={{ height: '40px', width: '118px' }}
                onClick={onClose}
              />
            )}
          </>
        )}
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
