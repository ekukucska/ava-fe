import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import CustomButton from '../../components/CustomButton/CustomButton';
import LoginContentContainer from '../../components/LoginContentContainer/LoginContentContainer';
import loginUserApi from '../../utils/api/loginUserApi';

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitError, setSubmitError] = useState(false); // To track form submission error

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('authenticatedUser');

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      setSubmitError(true);
      return;
    }

    try {
      const data = await loginUserApi(email, password);
      localStorage.setItem('token', data.token);
      localStorage.setItem('authenticatedUser', email);
      navigate('/');
    } catch (error) {
      setSubmitError(true);
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    navigate('/signup');
  };

  return (
    <>
      <LoginContentContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'left',
            textAlign: 'left',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 'bold', marginBottom: '1.5rem' }}
          >
            Welcome
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '3.5rem' }}>
            Discover Insights with <strong>DataSense</strong>, your gateway to
            advanced data visualization
          </Typography>

          {submitError && (
            <Alert
              severity="error"
              icon={false}
              sx={{ marginBottom: '1.5rem' }}
            >
              Incorrect email or password. Please try again.
            </Alert>
          )}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              marginBottom: '2rem',
              width: '100%',
            }}
          >
            <TextField
              label="Email"
              placeholder="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}
              helperText={emailError}
              onBlur={() => validateEmail(email)}
              InputProps={{
                style: { borderRadius: '0.5rem' },
              }}
              sx={{
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
              label="Password"
              placeholder="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}
              onBlur={() => validatePassword(password)}
              InputProps={{
                style: { borderRadius: '0.5rem' },
              }}
              sx={{
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

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              marginBottom: '3.5rem',
              width: '100%',
            }}
          >
            <CustomButton
              text="Sign in"
              variant="contained"
              onClick={handleSignIn}
              disabled={!!emailError || !!passwordError}
              sx={{ height: '40px' }}
            />
            <CustomButton
              text="Sign up"
              variant="outlined"
              onClick={handleSignUp}
              sx={{ height: '40px' }}
            />
          </Box>

          <Divider sx={{ borderColor: '#e0ecf9', marginBottom: '1.5rem' }} />

          <Typography variant="h5">
            Disclaimer: The data displayed in this dashboard is confidential and
            contains Personal Identifiable Information (PII). Access and use of
            this information is restricted to authorized personnel only.
          </Typography>
        </Box>
      </LoginContentContainer>
    </>
  );
};

export default SignInPage;
