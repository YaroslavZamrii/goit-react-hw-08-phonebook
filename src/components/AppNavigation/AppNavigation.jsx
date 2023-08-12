import React from 'react';
import { AppBar as AppBarContainer, Box, Container } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';

const AppNavigation = () => {
  return (
    <Box component={'header'}>
      <AppBarContainer position="static">
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Navigation />
            <AuthNav />
          </Box>
        </Container>
      </AppBarContainer>
    </Box>
  );
};

export default AppNavigation;
