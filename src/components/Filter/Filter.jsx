import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <>
      <TextField
        label="Search contact"
        variant="filled"
        sx={{
          display: 'flex',
          maxWidth: '805px',
          mt: 5,
          mb: 5,
          mx: 'auto',
          boxShadow: 1,
          color: '#1976d2',
          bgcolor: 'rgba(25, 118, 210, 0.1)',
        }}
        autoComplete="off"
        fullWidth
        type="text"
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        placeholder="search"
      />
    </>
  );
};
