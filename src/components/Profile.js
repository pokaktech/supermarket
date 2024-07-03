import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import { useCart } from './ContextReducer';
import Footer from "./Footer";

export default function Profile() {
  const [name, setName] = useState(localStorage.getItem('username') || '');
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
  const [address, setAddress] = useState('');
  const { cart } = useCart();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/user-profile/${email}`, {
        name,
        address
      });
      console.log(response);
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Container fluid style={{ backgroundColor: 'whitesmoke', minHeight: '100vh', color: 'black', paddingTop: '50px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>User Profile</h1>

      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">Personal Information</Card.Title>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ backgroundColor: 'blue', width: '100%' }}>Save Changes</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">My Cart - {cart.length} items</Card.Title>
              {cart.map((item) => (
                <Card key={item.productId} className="mb-3">
                  <Card.Body>
                    <Row>
                      <Col xs={4}>
                        <Image src={item.imageUrl} thumbnail style={{ width: '100px', height: '100px' }} />
                      </Col>
                      <Col xs={8}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>Quantity: {item.quantity}</Card.Text>
                        <Card.Text>Price: Rs. {item.price.toFixed(2)}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Footer />
    </Container>
  );
}
