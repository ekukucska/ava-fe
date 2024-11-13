import { useContext, useEffect, useState } from 'react';
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
import ModalsContext from '../../state/ModalsContext';
import userApiUtils from '../../utils/api/userApiUtils';
import ProfileMenuModal from '../ProfileMenuModal/ProfileMenuModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import DeleteAccountModal from '../DeleteAccountModal/DeleteAccountModal';
import SignOutModal from '../SignOutModal/SignOutModal';

const pages = [
  { name: 'Studies', path: '/studies' },
  { name: 'Patterns', path: '/patterns' },
  { name: 'Events', path: '/events' },
];

function ResponsiveAppBar() {
  const theme = useTheme();
  const location = useLocation();
  const { setOpenProfileModal } = useContext(ModalsContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('test@mail.com'); // TODO: Add actual email check logic

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await userApiUtils.getUserByEmail(email);
        if (user) {
          setFirstName(user.firstName || '');
          setLastName(user.lastName || '');
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  const displayName =
    firstName || lastName
      ? `${firstName} ${lastName}`.trim()
      : email || 'Researcher';

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const isActive = (path) =>
    location.pathname === path ||
    (path === '/studies' && location.pathname === '/') ||
    location.pathname.startsWith(`${path}/`);

  const handleProfileButtonClick = () => setOpenProfileModal(true);

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
              aria-label="menu"
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: isActive(page.path)
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main,
                    fontFamily: "'Nunito', sans-serif",
                    textTransform: 'capitalize',
                    fontSize: '20px',
                    fontWeight: 600,
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              paddingX: '8rem',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: isActive(page.path)
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                  display: 'block',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Typography
            sx={{ display: { xs: 'none', md: 'flex' }, marginRight: '2rem' }}
          >
            {displayName}
          </Typography>

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
