import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contactsOperations';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { Report } from 'notiflix';

export const ContactForm = ({ onToggleModal }) => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const formSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (visibleContacts.some(contact => contact.name === name)) {
      Report.warning(
        `${name}`,
        'This user is already in the contact list.',
        'OK'
      );
    } else {
      dispatch(addContactThunk({ name, number }));
    }

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
            pattern="[0-9]{10,15}"
            title="Please enter a valid mobile phone number"
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
