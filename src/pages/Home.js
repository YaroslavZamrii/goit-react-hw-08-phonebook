import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/auth/authSlice';

const Home = () => {
  const authentificated = useSelector(selectAuthentificated);
  return (
    <Box
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Typography component="h1" variant="h3">
        Welcome to your Phonebook
      </Typography>

      {!authentificated && (
        <Typography component="p" variant="h6">
          You can <Link to="/register">register</Link> or{' '}
          <Link to="/login">login</Link> if you already have an account. You
          will be able to add a list of contacts, which you can edit, delete or
          filter.
        </Typography>
      )}

      {authentificated && (
        <Typography component="p" variant="h6">
          You are already logged in! Go to <Link to="/contacts">contacts</Link>{' '}
          to add new friends!
        </Typography>
      )}
    </Box>
  );
};

export default Home;
