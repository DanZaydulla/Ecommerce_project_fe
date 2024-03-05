import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const handleFavoriteItems = () => {
    alert('Favorite items clicked!');
   
  };


  const handleOrderList = () => {
    alert('Order list clicked!');
  
  };

 
  const handleLogin = () => setIsLoggedIn(true);

 
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="navbar">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My E-Commerce Site
          </Typography>
          <IconButton color="inherit" aria-label="favorite items" onClick={handleFavoriteItems}>
            <FavoriteIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="order list" onClick={handleOrderList}>
            <ShoppingCartIcon />
          </IconButton>
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button color="inherit" onClick={() => alert("Login functionality not implemented")}>Login</Button>
              <Button color="inherit" onClick={() => alert("Sign-Up functionality not implemented")}>Sign Up</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
