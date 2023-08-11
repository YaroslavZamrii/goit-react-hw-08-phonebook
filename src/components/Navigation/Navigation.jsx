import { Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { ContactPhone } from '@mui/icons-material';

export const Navigation = () => {
  return (
    <Box component={'nav'}>
      <Toolbar sx={{}}>
        <Button component={RouterNavLink} variant="outline" to="/">
          <ContactPhone sx={{ mr: 2 }} />
          <Typography variant="h6" component="p" sx={{ textTransform: 'none' }}>
            Phonebook
          </Typography>
        </Button>
      </Toolbar>
    </Box>
  );
};
