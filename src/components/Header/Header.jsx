import { useState } from 'react';
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
  Tooltip,
  MenuItem,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';

const pages = ['Studies', 'Subjects', 'Events'];
const settings = ['Profile', 'Account', 'Settings', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const activeColor = theme.palette.primary.main;
  const circleColor = theme.palette.background.paper;
  const borderColor = activeColor;

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

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '4rem',
        boxShadow: 'none',
        borderBottom: '1px solid #e0ecf9',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          boxShadow: 'none',
          borderBottom: '1px solid #e0ecf9',
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
            Analytics Visualization App
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
            AVA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: circleColor,
                    border: `2px solid ${borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PersonIcon sx={{ color: activeColor, fontSize: 30 }} />
                </Box>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
