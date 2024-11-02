import { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';
import ModalsContext from '..//../state/ModalsContext';
import ProfileMenuModal from '../ProfileMenuModal/ProfileMenuModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import DeleteAccountModal from '../DeleteAccountModal/DeleteAccountModal';
import SignOutModal from '../SignOutModal/SignOutModal';

const pages = ['Studies', 'Subjects', 'Events'];

function ResponsiveAppBar() {
  const theme = useTheme();
  const location = useLocation();

  const { setOpenProfileModal } = useContext(ModalsContext);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isActive = (page) => {
    if (location.pathname === '/' && page.toLowerCase() === 'studies') {
      return true;
    }
    if (
      page.toLowerCase() === 'events' &&
      location.pathname.startsWith('/events')
    ) {
      return true;
    }
    return location.pathname === `/${page.toLowerCase()}`;
  };

  const handleProfileButtonClick = () => {
    setOpenProfileModal(true);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.white,
        minHeight: '4rem',
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.ava_light_blue.main}`,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.ava_light_blue.main}`,
        }}
      >
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/assets/svg/DataSenseGray.svg"
            alt="Logo"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              width: 80,
              height: 'auto',
            }}
          />
          <Divider
            orientation="vertical"
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: 40,
              backgroundColor: theme.palette.divider,
              mx: 2,
            }}
          />

          <Typography
            variant="subtitle1"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 8,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Brandon Grotesque', 'sans-serif'",
              fontWeight: 700,
              letterSpacing: '0.05rem',
              textDecoration: 'none',
              color: theme.palette.secondary.main,
            }}
          >
            Data Visualization App
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: isActive(page)
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                    fontFamily: "'Nunito', sans-serif",
                    textTransform: 'capitalize',
                    fontSize: '20px',
                    fontWeight: 600,
                  }}
                >
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            src="/assets/svg/your-logo.svg"
            alt="Logo"
            sx={{
              display: { xs: 'none' },
              mr: 1,
              width: 80,
              height: 'auto',
            }}
          />

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 4,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: "'Brandon Grotesque', 'sans-serif'",
              fontSize: '26px',
              fontWeight: 700,
              letterSpacing: '0.05rem',
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
            DataSense
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              paddingX: '8rem',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{
                  my: 2,
                  color: isActive(page)
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                  display: 'block',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <IconButton onClick={handleProfileButtonClick} sx={{ p: 0 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'white',
                border: `2px solid ${theme.palette.primary.main}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PersonIcon
                sx={{ color: theme.palette.primary.main, fontSize: 25 }}
              />
            </Box>
          </IconButton>

          <ProfileMenuModal />
          <EditProfileModal />
          <DeleteAccountModal />
          <SignOutModal />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
