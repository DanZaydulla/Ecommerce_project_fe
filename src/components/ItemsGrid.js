import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const items = [
  {
    id: 1,
    title: "Laptop",
    photoUrl:
      "https://media.istockphoto.com/id/1457961412/photo/laptop-isolated-on-white-background-with-two-clipping-paths-included-realistic-3d-render.jpg?s=2048x2048&w=is&k=20&c=5OA6gx3Wv6dkepWxsuO_HXpyJ207t3Wvmo31CyqkOEw=",
    price: 999,
    quantityAvailable: 10,
  },
  {
    id: 2,
    title: "Smartphone",
    photoUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 599,
    quantityAvailable: 15,
  },
  {
    id: 3,
    title: "Headphones",
    photoUrl:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 199,
    quantityAvailable: 20,
  },
  {
    id: 4,
    title: "Watch",
    photoUrl:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2F0Y2h8ZW58MHx8MHx8fDA%3D",
    price: 249,
    quantityAvailable: 5,
  },
  {
    id: 5,
    title: "Tablet",
    photoUrl:
      "https://media.istockphoto.com/id/1378688632/photo/mockup-image-of-a-woman-holding-digital-tablet-with-blank-white-desktop-screen-in-cafe.webp?b=1&s=170667a&w=0&k=20&c=uXHOw2hEzFkKDTueVETaGbMRexZHmaTtsSg6VxLq-co=",
    price: 450,
    quantityAvailable: 8,
  },
  {
    id: 6,
    title: "Camera",
    photoUrl:
      "https://media.istockphoto.com/id/1140393948/photo/camera-isolated-on-white-background-with-clipping-path-mirrorless-camera-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=VNuyfxklT1L7WFBwHv7sruNUzGf1AjI9dEuqfcgUWbc=",
    price: 780,
    quantityAvailable: 10,
  },
  {
    id: 7,
    title: "Printer",
    photoUrl:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
    price: 150,
    quantityAvailable: 7,
  },
  {
    id: 8,
    title: "Monitor",
    photoUrl:
      "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    price: 300,
    quantityAvailable: 12,
  },
  {
    id: 9,
    title: "Keyboard",
    photoUrl:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    price: 30,
    quantityAvailable: 20,
  },
  {
    id: 10,
    title: "Mouse",
    photoUrl:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91c2V8ZW58MHx8MHx8fDA%3D",
    price: 22,
    quantityAvailable: 25,
  },
];

const ItemsGrid = () => {
  const [orders, setOrders] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleAddToOrder = (item) => {
    const itemIndex = orders.findIndex((order) => order.id === item.id);
    if (itemIndex !== -1) {
      const newOrders = [...orders];
      newOrders.splice(itemIndex, 1);
      setOrders(newOrders);
    } else {
      const newOrders = [...orders, item];
      setOrders(newOrders);
      localStorage.setItem("orders", JSON.stringify(newOrders));
    }
    
  };

  const toggleFavorite = (item) => {
    const newFavorites = favorites.find((favorite) => favorite.id === item.id)
      ? favorites.filter((favorite) => favorite.id !== item.id)
      : [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };
  

  return (
    <Grid container spacing={3} className="itemsGrid">
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <Card className="productCard">
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
            <CardActions disableSpacing>
              <IconButton
                onClick={() => handleAddToOrder(item)}
                color="primary"
              >
                {orders.find((order) => order.id === item.id) ? (
                  <ShoppingCartIcon />
                ) : (
                  <AddShoppingCartIcon />
                )}
              </IconButton>
              <IconButton onClick={() => toggleFavorite(item)} color="primary">
                {favorites.find((favorite) => favorite.id === item.id) ? (
                  <FavoriteIcon color="error" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemsGrid;
