import { useContext } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import ModalsContext from '../../state/ModalsContext';

function ProfileMenuModal() {
  const theme = useTheme();

  const {
    openProfileModal,
    setOpenProfileModal,
    setOpenEditProfileModal,
    setOpenDeleteAccountModal,
    setOpenSignOutModal,
  } = useContext(ModalsContext);

  const handleOnClose = () => {
    setOpenProfileModal(false);
  };

  const handleEditProfile = () => {
    setOpenEditProfileModal(true);
    setOpenProfileModal(false);
  };

  const onDeleteAccount = () => {
    setOpenDeleteAccountModal(true);
    setOpenProfileModal(false);
  };

  const onSignOut = () => {
    setOpenSignOutModal(true);
    setOpenProfileModal(false);
  };

  return (
    <Dialog
      open={openProfileModal}
      onClose={handleOnClose}
      aria-labelledby="signout-dialog-title"
      sx={{
        '& .MuiDialog-paper': {
          position: 'absolute',
          top: '55px',
          right: '55px',
          borderRadius: '8px',
          minWidth: '400px',
          textAlign: 'left',
          margin: 0,
          boxShadow: '0px 4px 8px 0px #0066CC33, 0px 0px 8px 0px #0066CC1A',
        },
      }}
    >
      <Box
        sx={{ height: '0.33rem', backgroundColor: theme.palette.primary.main }}
      />
      <DialogTitle
        id="signout-dialog-title"
        sx={{
          fontWeight: 'bold',
          fontSize: theme.typography.subtitle3.fontSize,
          color: theme.palette.secondary.main,
          textAlign: 'left',
          padding: '24px',
        }}
      >
        Manage your profile
      </DialogTitle>
      <Divider
        sx={{
          backgroundColor: theme.palette.ava_light_blue.main,
          borderColor: theme.palette.ava_light_blue.main,
          marginX: '1.5rem',
        }}
      />

      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '24px',
          gap: '1.5rem',
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'left',
              cursor: 'pointer',
              color: theme.palette.secondary.main,
              '&:hover, &:active': {
                backgroundColor: theme.palette.ava_light_blue_two.main,
              },
            }}
            onClick={handleEditProfile}
          >
            Edit profile
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'left',
              cursor: 'pointer',
              color: theme.palette.secondary.main,
              '&:hover, &:active': {
                backgroundColor: theme.palette.ava_light_blue_two.main,
              },
            }}
            onClick={onDeleteAccount}
          >
            Delete account
          </Typography>
        </Box>
      </DialogContent>

      <Divider
        sx={{
          backgroundColor: theme.palette.ava_light_blue.main,
          borderColor: theme.palette.ava_light_blue.main,
          marginX: '1.5rem',
        }}
      />

      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 1.5,
          padding: '24px',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'left',
            cursor: 'pointer',
            color: theme.palette.primary.main,
            '&:hover, &:active': {
              backgroundColor: theme.palette.ava_light_blue_two.main,
            },
          }}
          onClick={onSignOut}
        >
          Sign out
        </Typography>
      </DialogActions>
    </Dialog>
  );
}

export default ProfileMenuModal;
