import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Box, Container } from '@mui/material';
import { FormControl, FormGroup, FormLabel, TextField, FormHelperText, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import firestoreDb from '../../services/Firebase.Database';
import { addDoc, collection } from 'firebase/firestore';


const AddUserForm = () => {
  let css = Styles();
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const collectionRef = collection(firestoreDb, "todos");
    const addUser = { name: user.name, email: user.email, age: user.age, };
    const docRef = addDoc(collectionRef, addUser);
    alert((docRef, 'AddUserForm is Successfull !!'));
    navigate('/usertable')
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
                  value={user.name || ''}
                  onChange={handleInputChange}
                  required
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
                  value={user.email || ''}
                  onChange={handleInputChange}
                  required
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
                  value={user.age || ''}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <Button type='submit' variant="contained">Submit</Button>
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

export default AddUserForm;
