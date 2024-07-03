
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import axios from "axios";
import { useOrder } from './OrderSlice'; 
import { BsTrash } from 'react-icons/bs';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const { dispatch } = useOrder(); 

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/accounts/cart");
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
        setCart([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetchOrders(); // Fetch orders when component mounts
  }, []);

  const handleDeleteItem = (productId) => {
    const updatedCart = cart.filter(item => item.product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage after deleting item
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to the cart before checking out.");
      return;
    }
    
    try {
      const order = {
        id: new Date().getTime().toString(),
        order_items: cart.map(item => ({
          id: item.product.id,
          productDetails: item.product,
          qty: item.qty,
          price: item.product.price,
        })),
        total_price: cart.reduce((total, item) => total + Number(item.product.discounted_price || item.product.price) * item.qty, 0),
        status: 'Pending'
      };

      dispatch({ type: 'ADD_ORDER', payload: order }); // Dispatch ADD_ORDER action with the new order

      // Store the new order in local storage
      const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
      storedOrders.push(order);
      localStorage.setItem("orders", JSON.stringify(storedOrders));

      // Clear the cart and localStorage after successful checkout
      setCart([]);
      localStorage.removeItem("cart");

      // Redirect the user to the orders page after successful checkout
      navigate("/orders");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div>
      <br /><br /><br />
      <h2 className="text-center">My Cart</h2>

      {/* Cart items table */}
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.product.name}</TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell>{Number(item.product.discounted_price || item.product.price).toFixed(2)}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteItem(item.product.id)}>
                      <BsTrash />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <p style={{ float: 'right' }}>Total Price is Rs: {cart.reduce((total, item) => total + Number(item.product.discounted_price || item.product.price) * item.qty, 0).toFixed(2)}</p><br />
      </Container>

      <Button variant="contained" color="primary" onClick={handleCheckout} style={{ float: 'right' }}>
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
