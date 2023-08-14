import { Box, List, Typography } from '@mui/material';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const isMatchingContacts = contacts.length === 0 && !isLoading && !error;

  return (
    <Box sx={{ flexGrow: 1, maxWidth: '800px', m: '0 auto' }}>
      {isMatchingContacts && (
        <Typography
          sx={{ m: '4px auto 0 auto', width: { xs: '90%', sm: '500px' } }}
          variant="h6"
          component="div"
        >
          There is no such contact
        </Typography>
      )}

      <List
        sx={{ display: 'flex', flexDirection: 'column', gap: '10px', p: '0' }}
      >
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
    </Box>
  );
};

export default ContactList;
