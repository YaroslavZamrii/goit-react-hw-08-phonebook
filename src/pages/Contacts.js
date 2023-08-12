import { useState } from 'react';

import { Button, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { TransitionsModal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

export default function Contacts({ handleIsSuchСontact }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      {/* <ContactList handleIsSuchСontact={handleIsSuchСontact} /> */}

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
