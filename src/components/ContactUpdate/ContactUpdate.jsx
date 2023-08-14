import { useDispatch, useSelector } from 'react-redux';

import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';
import { updateContactThunk } from 'redux/contacts/contactsOperations';
import { useState } from 'react';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { Report } from 'notiflix';

export const ContactUpdate = ({
  onToggleModal,
  contact: { name: initialName, number: initialNumber, id },
}) => {
  const [name, setName] = useState(initialName);
  const [number, setNumber] = useState(initialNumber);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

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
      dispatch(updateContactThunk({ name, number, id }));
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
          Update contact
        </Typography>
        <form onSubmit={formSubmit} autoComplete="off" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            minLength={2}
            required
          />

          <TextField
            margin="normal"
            fullWidth
            id="number"
            name="number"
            label="Phone"
            type="tel"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </form>
      </Box>
    </>
  );
};
