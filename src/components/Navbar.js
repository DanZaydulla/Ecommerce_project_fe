import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="navbar">
      <AppBar position="static" color="primary">
        <Toolbar>
        
         <Link to="/" style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            <Typography variant="h6">
              My E-Commerce Site
            </Typography>
          </Link>
          
          <IconButton color="inherit" component={Link} to="/favorite" aria-label="favorite items">
            <FavoriteIcon />
          </IconButton>
         
          <IconButton color="inherit" component={Link} to="/order" aria-label="order list">
            <ShoppingCartIcon />
          </IconButton>
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
           
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
             
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
