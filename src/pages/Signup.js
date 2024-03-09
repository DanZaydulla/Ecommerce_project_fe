import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Correctly import useNavigate

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const customerData = {
      username: username,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      address_country: country,
      address_city: city,
      password: password,
    };


    try {
      
      await axios.post('http://localhost:8082/api/customers', customerData);
      alert('Signup successful!');
      navigate('/'); 
    } catch (error) {
      console.error(error);
      alert('Signup failed! Please try again.');
    }
  };

 
  return (
    <div>
      <h1>Signup</h1>
      <Container maxWidth="sm">
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="first-name"
            label="First Name"
            fullWidth
            variant="standard"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="last-name"
            label="Last Name"
            fullWidth
            variant="standard"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="email"
            label="Email"
            fullWidth
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="username"
            label="Username"
            fullWidth
            variant="standard"
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="city"
            label="City"
            fullWidth
            variant="standard"
            onChange={(e) => setCity(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="country"
            label="Country"
            fullWidth
            variant="standard"
            onChange={(e) => setCountry(e.target.value)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="phone-number"
            label="Phone Number"
            fullWidth
            variant="standard"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Box>
        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Button variant="contained" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;