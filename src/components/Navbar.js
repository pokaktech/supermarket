import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    history('/admin-login');
  };

  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'blue',"color":"white" }}>
      <Container>
        <Navbar.Brand as={Link} to="/">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category-list" style={{"color":"white"}}>Categories List</Nav.Link>
            <Nav.Link as={Link} to="/ads" style={{"color":"white"}}>Advertisement</Nav.Link>
            <Nav.Link as={Link} to="/product-list" style={{"color":"white"}}>Products List</Nav.Link>
            <Nav.Link as={Link} to="/user-activity" style={{"color":"white"}}>User Activity</Nav.Link>
            <Nav.Link as={Link} to="/special-offers-list" style={{"color":"white"}}>Special Offers List</Nav.Link>
            
          </Nav>
          <Button variant="outline-light" onClick={handleLogout} style={{"color":"white"}}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
