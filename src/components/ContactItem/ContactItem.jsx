import { useState } from 'react';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  ListItemSecondaryAction,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contactsOperations';
import { TransitionsModal } from 'components/Modal/Modal';
import { ContactUpdate } from 'components/ContactUpdate/ContactUpdate';

const ContactItem = ({ id, name, number }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <>
      <ListItem
        sx={{
          backgroundColor: 'rgba(0, 138, 255, 0.16)',
          borderRadius: '4px',
          boxShadow: 4,
        }}
      >
        <ListItemAvatar>
          <Avatar alt={name} src="/broken-image.jpg"></Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={number} />

        <ListItemSecondaryAction
          sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}
        >
          <IconButton
            component={'a'}
            href={`tel:${number}`}
            edge="end"
            aria-label="delete"
            sx={{
              ':hover': {
                bgcolor: 'white',
                color: 'green',
              },
            }}
            color="primary"
          >
            <CallIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="edit"
            sx={{
              '&:hover': { color: '#1976d2' },
              '&:focus': { color: '#1976d2' },
            }}
            onClick={handleOpen}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="delete"
            sx={{
              ':hover': {
                bgcolor: 'white',
                color: 'red',
              },
            }}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {open && (
        <TransitionsModal handleClose={handleClose} open={open}>
          <ContactUpdate
            onToggleModal={handleClose}
            contact={{ name, number, id }}
          />
        </TransitionsModal>
      )}
    </>
  );
};

export default ContactItem;
