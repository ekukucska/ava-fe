import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const { openDeleteAccountModal, setOpenDeleteAccountModal } =
    useContext(ModalsContext);

  const [deleteSuccessful, setDeleteSuccessful] = useState(false);
  const [deletionError, setDeletionError] = useState('');
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
  }, []);

  const onClose = () => {
    setOpenDeleteAccountModal(false);
    if (deleteSuccessful) {
      navigate('/signin');
    }
    setDeleteSuccessful(false);
    setDeletionError('');
  };

  const onCancel = () => {
    setOpenDeleteAccountModal(false);
  };

  const onDelete = async () => {
    try {
      const userEmail = localStorage.getItem('authenticatedUser');
      if (userEmail) {
        await userApiUtils.deleteUser(token, userEmail);
        setDeleteSuccessful(true);
        setDeletionError('');
        localStorage.removeItem('authenticatedUser');
        localStorage.removeItem('token');
      } else {
        setDeletionError('User not authenticated.');
        setDeleteSuccessful(false);
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      setDeletionError('Failed to delete account. Please try again.');
      setDeleteSuccessful(false); // Ensure deleteSuccessful is false on error
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
        {deleteSuccessful ? (
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
            {!deleteSuccessful ? (
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
