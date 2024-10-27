import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContentContainer from '../../components/LoginContentContainer/LoginContentContainer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CustomButton from '../../components/CustomButton/CustomButton';
import Divider from '@mui/material/Divider';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
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
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter');
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setPasswordError('Password must contain at least one number');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validatePasswordMatch = (password, confirmPassword) => {
    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      return false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    }
    setConfirmPasswordError('');
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
    validatePasswordMatch(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePasswordMatch(password, newConfirmPassword);
  };

  const handleRequestAccount = (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = validatePasswordMatch(password, confirmPassword);

    if (isEmailValid && isPasswordValid && doPasswordsMatch) {
      console.log('Form is valid, proceeding with submission', {
        email,
        password,
      });
      // TODO: Add account creation logic
    }
  };

  const handleNavigateToSignIn = () => {
    navigate('/signin');
  };

  return (
    <LoginContentContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          textAlign: 'left',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 'bold', marginBottom: '1.5rem' }}
        >
          Request account
        </Typography>
        <Typography variant="body2">Already have an account?</Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'primary.main',
            cursor: 'pointer',
            marginBottom: '3.5rem',
          }}
          onClick={handleNavigateToSignIn}
        >
          Sign in here
        </Typography>
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
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
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
            text="Request account"
            variant="contained"
            onClick={handleRequestAccount}
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
  );
};

export default SignUpPage;
