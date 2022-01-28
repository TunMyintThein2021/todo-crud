import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Container, Paper } from '@mui/material';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, } from '@mui/material';
import { Stack, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

import firestoreDb from '../services/Firebase.Database';
import { collection, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';


const UserTable = () => {
  let css = Styles();

  // Setting state
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  // handleEditShow
  const handleEditShow = (user) => {
    setOpenModal(true);
    setCurrentUser(user);
  };

  // handleEditUpdate
  const handleEditUpdate = async (user) => {
    const userUpdateDoc = doc(firestoreDb, 'todos', user.id);
    await updateDoc(userUpdateDoc, {
      name: user.name,
      email: user.email,
      age: user.age,
    });
    setOpenModal(false);
    alert((userUpdateDoc, 'Update is Successfull !!'));
  };

  // handleDelete Data
  const handleDelete = async (id) => {
    // await deleteDoc(doc(firestoreDb, "users", id));
    const userDeleteDoc = doc(firestoreDb, 'todos', id);
    await deleteDoc(userDeleteDoc);
    alert((userDeleteDoc, 'Delete is Successfull !!'));
  };

  // Firestore Get Database
  useEffect(() => {
    const usersCollectionRef = collection(firestoreDb, 'todos');
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);


  return (
    <Box className={css.userFormLists}>
      <Container maxWidth="md">
        <ThemeProvider theme={theme}>
          {openModal ? (
            <Fragment>
              <Typography variant="h2">Welcome to EditUserForm !</Typography>
              <EditUserForm
                openModal={openModal}
                setOpenModal={setOpenModal}
                currentUser={currentUser}
                handleEditUpdate={handleEditUpdate}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Typography variant="h2">Welcome to AddUserForm !</Typography>
              <AddUserForm />
            </Fragment>
          )}
        </ThemeProvider>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users.length > 0 ? (
                  users.map(user => (
                    <TableRow key={user.id} >
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.age}</TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={2}>
                          <Button
                            onClick={() => { handleEditShow(user) }}
                            variant="outlined" color="primary" startIcon={<EditIcon />}>
                            Edit
                          </Button>
                          <Button
                            onClick={() => { handleDelete(user.id) }}
                            variant="contained" color="secondary" endIcon={<DeleteIcon />}>
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5}>No Users</TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

const Styles = makeStyles({
  userFormLists: {
    padding: '40px 0',
    background: '#E7EBF0',
  },
});

const theme = createTheme({
  typography: {
    h2: {
      marginBottom: '30px',
      fontSize: '1.5rem',
      fontWeight: '500',
      textAlign: 'center',
    },
  },
});

export default UserTable;
