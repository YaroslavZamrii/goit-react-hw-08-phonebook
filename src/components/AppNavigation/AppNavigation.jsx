import React from 'react';
import { AppBar as AppBarContainer, Box, Container } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';

const AppNavigation = () => {
  return (
    <Box component={'header'}>
      <AppBarContainer position="static">
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Navigation />
          </Box>
        </Container>
      </AppBarContainer>
    </Box>
  );
};

export default AppNavigation;
