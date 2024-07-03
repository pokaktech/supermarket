import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container fluid style={{ padding: 0, margin: 0 }}> {/* Added inline styles to remove padding and margin */}
      <Navbar variant="dark" className="flex flex-col items-center py-8 text-red" style={{ backgroundColor: 'white', bottom: 0, width: '100%' }}> {/* Added width: '100%' */}
        <Nav className="flex">
          <Nav.Link as={Link} to="/cart" className="text-center px-4" style={{ color: '#8D99AE' }}>Cart</Nav.Link>
          <Nav.Link as={Link} to="/products" className="text-center px-4" style={{ color: '#8D99AE' }}>Products</Nav.Link>
          <Nav.Link as={Link} to="/categories" className="text-center px-4" style={{ color: '#8D99AE' }}>Categories</Nav.Link>
        </Nav>
        <span className="text-muted" style={{ color: '#8D99AE' }}>
          &copy; {currentYear} Grocery Store. All rights reserved.
        </span>
      </Navbar>
    </Container>
  );
}
