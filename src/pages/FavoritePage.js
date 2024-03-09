import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const saveFavorites = async () => {
    const customerId = "123"; 
    const favoritesData = {
      customerId,
      items: favorites,
    };

    try {
      await axios.post('http://localhost:8082/api/favorites', favoritesData);
      alert('Favorites saved successfully!');
      navigate('/'); 
    } catch (error) {
      console.error(error);
      alert('Failed to save favorites. Please try again.');
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        Favorite Items
      </Typography>
      {favorites.length > 0 ? (
        <Grid container spacing={3}>
          {favorites.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.photoUrl}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No favorite items found.</Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={saveFavorites}
        sx={{ mt: 3 }}
      >
        Save Favorites
      </Button>
    </div>
  );
};

export default FavoritePage;
