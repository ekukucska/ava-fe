import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import ModalsContext from '../../state/ModalsContext';
import CustomButton from '../CustomButton/CustomButton';
import userApiUtils from '../../utils/api/userApiUtils';

function EditProfileModal() {
  const theme = useTheme();

  const { openEditProfileModal, setOpenEditProfileModal } =
    useContext(ModalsContext);

  const [editSuccessful, setEditSuccessful] = useState(false);
  const [editError, setEditError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
  }, []);

  const onClose = () => {
    setOpenEditProfileModal(false);
    setEditSuccessful(false);
    setEditError('');
  };

  const onCancel = () => {
    setOpenEditProfileModal(false);
  };

  const onSubmit = async () => {
    try {
      const email = localStorage.getItem('authenticatedUser');
      if (email) {
        await userApiUtils.updateUserNames(token, email, firstName, lastName);
        setEditSuccessful(true);
        setEditError('');
      } else {
        setEditError('User not authenticated.');
        setEditSuccessful(false);
      }
    } catch (error) {
      setEditError('Update failed. Please try again.');
      setEditSuccessful(false);
    }

    setFirstName('');
    setLastName('');
  };

  const handleFirstNameChange = (event) => {
    event.preventDefault();
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    event.preventDefault();
    setLastName(event.target.value);
  };

  return (
    <Dialog
      open={openEditProfileModal}
      onClose={onClose}
      aria-labelledby="edit-profile-dialog-title"
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '8px',
          minWidth: '400px',
          width: '672px',
          textAlign: 'center',
          margin: '0px',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <DialogTitle
        id="edit-profile-dialog-title"
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
        Edit Profile
      </DialogTitle>
      <Divider
        sx={{
          backgroundColor: theme.palette.ava_light_blue.main,
          borderColor: theme.palette.ava_light_blue.main,
        }}
      />

      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'left',
          padding: '24px',
          gap: '2rem',
        }}
      >
        {editError ? (
          <Typography
            variant="body2"
            sx={{ color: 'error.main', textAlign: 'left' }}
          >
            {editError}
          </Typography>
        ) : editSuccessful ? (
          <Typography
            variant="body2"
            sx={{ color: 'secondary.main', textAlign: 'left' }}
          >
            You have successfully updated your profile.
          </Typography>
        ) : (
          <Typography
            variant="body2"
            sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
          >
            Use the form below to update your profile information.
          </Typography>
        )}

        {!editSuccessful && !editError ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              marginBottom: '2rem',
              width: '100%',
            }}
          >
            <TextField
              label="First name"
              placeholder="First name"
              variant="outlined"
              onChange={handleFirstNameChange}
              InputProps={{
                style: { borderRadius: '0.5rem' },
              }}
              sx={{
                width: '320px',
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'primary.main',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'secondary.main',
                  opacity: 1,
                },
                '& .MuiInputBase-input:focus::placeholder': {
                  opacity: 0,
                  transition: 'opacity 0.2s ease-out',
                },
                '& .MuiInputLabel-root': {
                  color: 'secondary.main',
                },
                '& .MuiInputBase-root': {
                  height: '3rem',
                },
                '& .MuiOutlinedInput-input': {
                  padding: '0 14px',
                  height: '3rem',
                  boxSizing: 'border-box',
                },
                '& .MuiFormHelperText-root': {
                  color: 'error.main',
                  marginLeft: '0',
                },
              }}
            />
            <TextField
              label="Last name"
              placeholder="Last name"
              variant="outlined"
              onChange={handleLastNameChange}
              InputProps={{
                style: { borderRadius: '0.5rem' },
              }}
              sx={{
                width: '320px',
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'primary.main',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'secondary.main',
                  opacity: 1,
                },
                '& .MuiInputBase-input:focus::placeholder': {
                  opacity: 0,
                  transition: 'opacity 0.2s ease-out',
                },
                '& .MuiInputLabel-root': {
                  color: 'secondary.main',
                },
                '& .MuiInputBase-root': {
                  height: '3rem',
                },
                '& .MuiOutlinedInput-input': {
                  padding: '0 14px',
                  height: '3rem',
                  boxSizing: 'border-box',
                },
                '& .MuiFormHelperText-root': {
                  color: 'error.main',
                  marginLeft: '0',
                },
              }}
            />
          </Box>
        ) : null}
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
        {editError ? (
          <CustomButton
            text="Close"
            variant="contained"
            sx={{ height: '40px', width: '118px' }}
            onClick={onClose}
          />
        ) : !editSuccessful ? (
          <>
            <CustomButton
              text="Cancel"
              variant="outlined"
              sx={{ height: '40px', width: '118px' }}
              onClick={onCancel}
            />
            <CustomButton
              text="Submit"
              variant="contained"
              sx={{ height: '40px', width: '118px' }}
              onClick={onSubmit}
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
      </DialogActions>
    </Dialog>
  );
}

export default EditProfileModal;
