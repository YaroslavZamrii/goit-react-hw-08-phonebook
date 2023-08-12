import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';

export const ContactForm = ({ onToggleModal, handleIsSuchСontact }) => {
  const formSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = { name, phone: number };

    console.log('newContact:', newContact);
    onToggleModal();
    form.reset();
  };

  return (
    <>
      <Button
        sx={{ display: 'block', ml: 'auto' }}
        onClick={() => {
          onToggleModal();
        }}
      >
        <CloseIcon />
      </Button>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mx: 'auto',
          width: 500,
          height: 380,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <PersonAddAltIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Add contact
        </Typography>

        <form onSubmit={formSubmit} autoComplete="off" sx={{ mt: 1 }}>
          <TextField
            required
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
          />

          <TextField
            required
            margin="normal"
            fullWidth
            id="number"
            name="number"
            label="Phone"
            type="tel"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </form>
      </Box>
    </>
  );
};
