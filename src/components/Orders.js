import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal } from '@mui/material';
import { BsEye, BsTrash } from 'react-icons/bs';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem('orders', JSON.stringify(orders));
    }
  }, [orders]);

  const handlePayment = async () => {
    const totalAmount = calculateTotalOrderPrice();
    try {
      const paymentResponse = await initiatePayment(totalAmount);
      console.log('Payment initiated:', paymentResponse);

      if (typeof window.Razorpay === 'undefined') {
        console.error('Razorpay SDK not loaded');
        return;
      }

      const options = {
        key: 'rzp_test_IaGnSH1ZCoxcdg', // Replace with your Razorpay API key
        amount: paymentResponse.totalAmount,
        currency: paymentResponse.currency,
        order_id: paymentResponse.id,
        handler: async function (response) {
          try {
            const paymentData = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };
            const verificationResult = await verifyPayment(paymentData);
            if (verificationResult.status === 'Payment successful') {
              alert('Payment successful!');
             
            } else {
              alert('Payment failed!');
              
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            alert('Payment verification failed!');
          }
        },
        theme: {
          color: '#3399cc',
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  const initiatePayment = async (amount) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/create_payment/', { amount });
      return response.data;
    } catch (error) {
      console.error('Error initiating payment:', error);
      throw error;
    }
  };

  const verifyPayment = async (paymentData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/verify-payment/', paymentData);
      return response.data;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  };

  const calculateTotalOrderPrice = () => {
    return orders.reduce((total, order) => total + calculateTotalPrice(order), 0);
  };

  const calculateTotalPrice = (order) => {
    return order.total_price || 0;
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
 
    <Container maxWidth="lg">
     <br/><br/><br/>
      <Typography variant="h2" gutterBottom>
        Orders
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="body1">No orders yet</Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total Price (Rs.)</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  order.order_items && order.order_items.map((item, index) => (
                    <TableRow key={`${order.id}-${item.id}`}>
                      {index === 0 && <TableCell rowSpan={order.order_items.length}>{order.id}</TableCell>}
                      <TableCell>{item.productDetails.name}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{parseFloat(item.productDetails.price).toFixed(2)}</TableCell>
                      {index === 0 && <TableCell rowSpan={order.order_items.length}>{parseFloat(order.total_price).toFixed(2)}</TableCell>}
                      {index === 0 && (
                        <TableCell rowSpan={order.order_items.length}>
                          <Button onClick={() => handleViewDetails(order)}><BsEye /></Button>{' '}
                          <Button onClick={() => handleDeleteOrder(order.id)}><BsTrash /></Button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <strong>Total Price:</strong> Rs. {calculateTotalOrderPrice().toFixed(2)}
          </div>
          <div style={{ textAlign: 'right', marginTop: '10px' }}>
            <Button variant="contained" color="primary" onClick={handlePayment}>Make Payment</Button>
          </div>
        </>
      )}

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', backgroundColor: 'white',
          padding: '20px', borderRadius: '8px'
        }}>
          <Typography variant="h5" gutterBottom>
            Order Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            {selectedOrder && (
              <>
                <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                <p><strong>Status:</strong> {selectedOrder.status}</p>
                <p><strong>Total Price:</strong> Rs. {selectedOrder.total_price.toFixed(2)}</p>
                <p><strong>Products:</strong></p>
                <ul>
                  {selectedOrder.order_items && selectedOrder.order_items.map((item) => (
                    <li key={item.id}>
                      {item.productDetails.name} - Quantity: {item.qty}, Price: Rs. {parseFloat(item.productDetails.price).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Typography>
        </div>
      </Modal>
    </Container>
  );
};

export default Orders;
