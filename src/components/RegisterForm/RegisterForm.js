import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from 'redux/auth/authOperations';
import { selectAuthentificated } from 'redux/auth/authSlice';
import { Navigate } from 'react-router-dom';

export const RegisterForm = () => {
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorMail, setIsErrorMail] = useState(false);
  const [isErrorPass, setIsErrorPass] = useState(false);

  const dispatch = useDispatch();

  const authenticated = useSelector(selectAuthentificated);
  const isButtonDisabled = isErrorName || isErrorMail || isErrorPass;

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    dispatch(registerUserThunk(data));
    e.target.reset();
  };

  const handleChangeName = e => {
    if (e.target.value.trim().length === 0) {
      setIsErrorName(true);
    } else {
      setIsErrorName(false);
    }
  };
  const handleChangeEmail = e => {
    const validMail = e.target.value.includes('@');
    const minLength = e.target.value.length > 6;
    if (validMail && minLength) {
      setIsErrorMail(false);
    } else {
      setIsErrorMail(true);
    }
  };
  const handleChangePassword = e => {
    const isValidPassword = e.target.value.length > 6;
    if (isValidPassword) {
      setIsErrorPass(false);
    } else {
      setIsErrorPass(true);
    }
  };

  if (authenticated) return <Navigate to="/contacts" />;

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
            <HowToRegIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Register
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                margin="normal"
                fullWidth
                id="name"
                label="User name"
                name="name"
                onChange={handleChangeName}
                error={isErrorName}
                helperText={'Enter your name!'}
              />
              <TextField
                required
                margin="normal"
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                onChange={handleChangeEmail}
                error={isErrorMail}
                helperText={'email@example.com'}
              />
              <TextField
                required
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
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
                Register
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};
