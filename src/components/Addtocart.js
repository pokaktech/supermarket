
import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

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

const getPrice = (offer, products) => {
  if (!products || products.length === 0) {
    return 'Product data not available';
  }

  const currentDate = new Date();
  const endDate = new Date(offer.end_date);
  const product = products.find(product => product.id === parseInt(offer.products[0]));

  if (product) {
      // Ensure product.price is a number
      const price = Number(product.price);
      if (isNaN(price)) {
          console.error(`Invalid price for product ID ${product.id}`);
          return 'Invalid price';
      }

      if (endDate >= currentDate) {
          if (offer.discount_percentage) {
              const discount = offer.discount_percentage / 100;
              return (price * (1 - discount)).toFixed(2);
          } else {
              return price.toFixed(2);
          }
      } else {
          return price.toFixed(2);
      }
  } else {
      console.error('Product not found');
      return 'Product not found';
  }
};

const AddToCartModal = ({ open, handleClose, offer, products }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    if (!offer.products || !offer.products[0]) {
      console.error('Product is undefined');
      return;
    }

    const productId = parseInt(offer.products[0]);
    const product = products.find(product => product.id === productId);

    try {
      const response = await axios.post(`http://127.0.0.1:8000/accounts/add-to-cart/${productId}/`, {
        qty: quantity,
        price: getPrice(offer, products) // Get the price using the getPrice function
      });
      console.log('Added to cart:', response.data);
      handleClose();
      navigate('/cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {offer.title}
        </Typography>
       
        <img src={offer.image} alt={offer.title} style={{ width: '100%', margin: '10px 0' }} />
        <Typography>
          Price: {getPrice(offer, products)} 
        </Typography>
        <TextField
          type="number"
          label="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddToCart} fullWidth>
          Add to Cart
        </Button>
      </Box>
    </Modal>
  );
};

export default AddToCartModal;
