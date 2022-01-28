import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container } from '@mui/material';
import { FormControl, FormGroup, FormLabel, TextField, FormHelperText, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const EditUserForm = (props) => {
  let css = Styles();
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  },
    [props],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEditUpdate(user);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={css.addUserForm}>
        <Container maxWidth="sm">
          <form
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth sx={{ mb: 3, }}>
              <FormGroup>
                <FormLabel>Name</FormLabel>
                <TextField
                  name='name'
                  type="text"
                  label="Name"
                  size='small'
                  variant="outlined"
                  value={user.name}
                  onChange={handleInputChange}
                />
                <FormHelperText></FormHelperText>
              </FormGroup>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3, }}>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <TextField
                  name='email'
                  type="email"
                  label="Email"
                  size='small'
                  variant="outlined"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 3, }}>
              <FormGroup>
                <FormLabel>Age</FormLabel>
                <TextField
                  name='age'
                  type="number"
                  label="Age"
                  size='small'
                  variant="outlined"
                  value={user.age}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <FormGroup>
                <Button sx={{ mr: 3 }}
                  onClick={() => props.setOpenModal(false)}
                  variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained">Update</Button>
              </FormGroup>
            </FormControl>
          </form>
        </Container>
      </Box>
    </ThemeProvider>
  )
};

const theme = createTheme({
  components: {
    MuiFormGroup: {
      styleOverrides: {
        root: {
          marginBottom: '0',
          flexDirection: 'unset',
          alignItems: 'center',
          label: {
            width: '30%',
          },
          div: {
            width: '70%',
          },
        },
      },
    },
  },
});

const Styles = makeStyles({
  addUserForm: {
    padding: '30px 0',
  },
});

export default EditUserForm;
