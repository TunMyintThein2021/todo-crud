import * as React from 'react';
// import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { MenuList, MenuItem, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Header = () => {
  // let css = Styles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h1">MUI LOGO</Typography>
            <MenuList>
              <MenuItem><Link href="/usertable" underline="none" color="inherit">User Table</Link></MenuItem>
              <MenuItem><Link href="/adduserform" underline="none" color="inherit">AddUserForm</Link></MenuItem>
            </MenuList>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

const theme = createTheme({
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        regular: {
          marginBottom: '0',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '1.5rem',
          fontWeight: '500',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          display: 'flex',
          flexWrap: 'wrap',
          li: {
            fontWeight: '500',
          }
        },
      },
    },
  },
});

// const Styles = makeStyles({

// });

export default Header;
