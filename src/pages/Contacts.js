import { useState } from 'react';

import { Button, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { TransitionsModal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { useSelector } from 'react-redux';

import {
  selectContactsError,
  selectUserContacts,
} from 'redux/contacts/contactsSlice';

export default function Contacts({ handleIsSuchСontact }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const contacts = useSelector(selectUserContacts);

  const error = useSelector(selectContactsError);

  const showEmptyPhoneBook = contacts.length === 0 && !error;

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ display: 'flex', mx: 'auto', my: 4 }}
      >
        <PersonAddAltIcon fontSize="large" />
        <Typography ml={2}> add contact</Typography>
      </Button>
      <Filter />
      <ContactList />
      {showEmptyPhoneBook && (
        <Typography
          sx={{ m: '4px auto 0 auto', width: { xs: '90%', sm: '500px' } }}
          variant="h6"
          component="div"
        >
          Your phonebook is empty. Please add contact.
        </Typography>
      )}

      {error && (
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Something went wrong...Try reloading the page
        </Typography>
      )}

      {open && (
        <TransitionsModal handleClose={handleClose} open={open}>
          <ContactForm
            onToggleModal={handleClose}
            handleIsSuchСontact={handleIsSuchСontact}
          />
        </TransitionsModal>
      )}
    </div>
  );
}
