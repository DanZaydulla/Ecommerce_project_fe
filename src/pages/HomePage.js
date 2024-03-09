import React, { useState } from 'react';
import ItemsGrid from '../components/ItemsGrid';
import { Typography, Modal, Box, Button } from '@mui/material';

const HomePage = () => {
  const [orders, setOrders] = useState([]);
  const [showOrdersModal, setShowOrdersModal] = useState(false);

  const handleToggleOrdersModal = () => {
    setShowOrdersModal(!showOrdersModal);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <ItemsGrid setOrders={setOrders} />
      <Button onClick={handleToggleOrdersModal}>View Orders</Button>
      <Modal
        open={showOrdersModal}
        onClose={handleToggleOrdersModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Orders
          </Typography>
          <div id="modal-modal-description">
            {orders.map((order, index) => (
              <Typography key={index}>{order.title} - ${order.price}</Typography>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default HomePage;
