import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const products = [
    { id: 1, title: "Laptop", photoUrl: "/path/to/laptop.jpg", price: 999, quantityAvailable: 10 },
    { id: 2, title: "Smartphone", photoUrl: "/path/to/smartphone.jpg", price: 599, quantityAvailable: 15 },
    { id: 3, title: "Headphones", photoUrl: "/path/to/headphones.jpg", price: 199, quantityAvailable: 20 },
    { id: 4, title: "Watch", photoUrl: "/path/to/watch.jpg", price: 249, quantityAvailable: 5 },
    { id: 5, title: "Tablet", photoUrl: "/path/to/tablet.jpg", price: 450, quantityAvailable: 8 },
    { id: 6, title: "Camera", photoUrl: "/path/to/camera.jpg", price: 780, quantityAvailable: 10 },
    { id: 7, title: "Printer", photoUrl: "/path/to/printer.jpg", price: 150, quantityAvailable: 7 },
    { id: 8, title: "Monitor", photoUrl: "/path/to/monitor.jpg", price: 300, quantityAvailable: 12 },
    { id: 9, title: "Keyboard", photoUrl: "/path/to/keyboard.jpg", price: 100, quantityAvailable: 20 },
    { id: 10, title: "Mouse", photoUrl: "/path/to/mouse.jpg", price: 50, quantityAvailable: 25 },
];

const ItemsGrid = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart`);
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={product.photoUrl}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => toggleFavorite(product.id)}>
                {favorites.includes(product.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
              </IconButton>
              <Button size="small" onClick={() => handleAddToCart(product)}>
                <ShoppingCartIcon /> Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemsGrid;
