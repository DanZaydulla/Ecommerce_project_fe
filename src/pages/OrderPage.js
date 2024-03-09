import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText, Button } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  const totalPrice = orders.reduce((total, item) => total + item.price, 0);
  const orderDate = new Date().toISOString().split('T')[0];
  const customerId = "123"; // Example customer ID

  const handlePayment = async () => {
    const orderData = {
      customerId,
      items: orders,
      orderDate,
      totalPrice,
      status: "TEMP",
    };

    try {
      await axios.post('http://localhost:8082/api/orders', orderData);
      alert('Order submitted successfully!');
      navigate('/'); 
    } catch (error) {
      console.error(error);
      alert('Failed to submit order. Please try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Order Summary
      </Typography>
      <Grid container spacing={2}>
        {orders.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.photoUrl}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
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
      <List>
        <ListItem>
          <ListItemText primary="Customer ID" secondary={customerId} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Order Date" secondary={orderDate} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Total Price" secondary={`$${totalPrice}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Order Status" secondary="TEMP" />
        </ListItem>
      </List>
      <Button variant="contained" onClick={handlePayment} sx={{ mt: 3 }}>
        Proceed to Payment
      </Button>
    </Container>
  );
};

export default OrderPage;
