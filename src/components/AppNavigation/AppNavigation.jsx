import React from 'react';
import { AppBar as AppBarContainer, Box, Container } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/auth/authSlice';
import { UserMenu } from 'components/UserMenu/UserMenu';

const AppNavigation = () => {
  const authenticated = useSelector(selectAuthentificated);

  return (
    <Box component={'header'}>
      <AppBarContainer position="static">
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Navigation />
            {authenticated ? <UserMenu /> : <AuthNav />}
          </Box>
        </Container>
      </AppBarContainer>
    </Box>
  );
};

export default AppNavigation;
