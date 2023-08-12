import { TextField } from '@mui/material';

export const Filter = () => {
  const handleChange = e => {
    console.log('e.target.value:', e.target.value);
  };

  return (
    <>
      <TextField
        label="Search contact"
        variant="filled"
        sx={{
          display: 'flex',
          width: 0.5,
          mt: 5,
          mb: 2,
          mx: 'auto',
          boxShadow: 1,
          color: '#1976d2',
          bgcolor: 'rgba(25, 118, 210, 0.1)',
        }}
        autoComplete="off"
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
