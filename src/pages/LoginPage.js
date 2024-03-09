import React, { useState } from 'react';
import { Container, Box, TextField, Button, Snackbar } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const navigate = useNavigate();

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setSnackbarMessage('Username and password are required');
      setOpenSnackbar(true);
      return;
    }

    try {
      const loginData = {
        username: username,
        password: password,
      };

      await axios.get('http://localhost:8082/api/customers', loginData);
      console.log('Login successful');
      navigate('/');
    } catch (error) {
      console.error(error);
      setSnackbarMessage('Login failed! Please try again.');
      setOpenSnackbar(true);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <Container maxWidth="sm">
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="username"
            label="Username"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
        />
      </Container>
    </div>
  );
};

export default LoginPage;


