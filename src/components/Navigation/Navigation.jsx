import { Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { ContactPhone } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/auth/authSlice';

export const Navigation = () => {
  const authentificated = useSelector(selectAuthentificated);

  return (
    <Box component={'nav'}>
      <Toolbar sx={{}}>
        <Button component={RouterNavLink} variant="outline" to="/">
          <ContactPhone sx={{ mr: 2 }} />
          <Typography variant="h6" component="p" sx={{ textTransform: 'none' }}>
            Phonebook
          </Typography>
        </Button>
        {authentificated && (
          <Button component={RouterNavLink} to="/contacts" variant="outline">
            <Typography
              variant="h6"
              component="p"
              sx={{ textTransform: 'none' }}
            >
              Contacts
            </Typography>
          </Button>
        )}
      </Toolbar>
    </Box>
  );
};
