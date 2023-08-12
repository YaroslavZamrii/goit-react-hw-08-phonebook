import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const LoginForm = () => {
  const [isErrorMail, setIsErrorMail] = useState(null);
  const [isErrorPass, setIsErrorPass] = useState(null);

  const isButtonDisabled = isErrorMail || isErrorPass;

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    console.log('data:', data);
    e.target.reset();
  };

  const handleChangeEmail = e => {
    const validMail = e.target.value.includes('@');
    const minLength = e.target.value.length > 9;
    if (validMail && minLength) {
      setIsErrorMail(null);
    } else {
      setIsErrorMail(true);
    }
  };
  const handleChangePassword = e => {
    const isValidPassword = e.target.value.length > 6;
    if (isValidPassword) {
      setIsErrorPass(null);
    } else {
      setIsErrorPass(true);
    }
  };

  return (
    <>
      <Container component="div" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Log in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChangeEmail}
                error={isErrorMail}
                helperText={'email@example.com'}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChangePassword}
                error={isErrorPass}
                helperText={'Password must be more than 7 characters'}
              />
              <Button
                disabled={isButtonDisabled}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log in
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;
