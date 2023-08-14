import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { selectUserData } from 'redux/auth/authSlice';
import { logoutUserThunk } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <AccountBoxIcon sx={{ mr: 1 }} />
        <Typography>{userData.email}</Typography>
      </Box>

      <Button
        component="button"
        type="button"
        variant="outline"
        onClick={() => dispatch(logoutUserThunk())}
      >
        Logout
      </Button>
    </Box>
  );
};
