import React, { useState, useEffect, useReducer } from 'react';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaListAlt, FaBoxes, FaUserAlt, FaClipboardList, FaSignOutAlt, FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import icons

const ActionTypes = {
  SET_LANGUAGE: 'SET_LANGUAGE',
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    default:
      return state;
  }
};

export default function CustomNavbar({ isLoggedIn, setIsLoggedIn }) {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { selectedLanguage: 'english' });
  const [ordersCount, setOrdersCount] = useState(0);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Calculate total number of items in the cart
    console.log(savedCart);
    let totalItems = 0;
    savedCart.forEach(item => {
      totalItems += item.qty;
    });
    console.log(totalItems);
    setCartItemCount(totalItems);
    
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrdersCount(orders.length);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const { selectedLanguage } = state;

  return (
    <>
      {/* Navbar for smaller screens (bottom position) */}
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'whitesmoke', color: "#fff", position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }} className="d-lg-none">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: 'black', marginRight: '2rem' }}>
            <FaHome />
          </Navbar.Brand>
          <Nav className="ms-auto" style={{ marginLeft: '50%' }}>
            {isLoggedIn ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
                  <NavLink to="/cart" icon={<FaShoppingCart />} count={cartItemCount} style={{ marginRight: '10px' }} />
                  <NavLink to="/categories" icon={<FaListAlt />} style={{ marginLeft: '10px', marginRight: '10px' }} />
                  <NavLink to="/products" icon={<FaBoxes />} style={{ marginLeft: '10px', marginRight: '10px' }} />
                  <NavLink to="/orders" icon={<FaClipboardList />} count={ordersCount} style={{ marginLeft: '10px', marginRight: '10px' }} />
                  
                  <Button variant="outline-dark" onClick={handleLogout} style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <FaSignOutAlt />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
                  <NavLink to="/login" icon={<FaSignInAlt />} style={{ marginRight: '10px' }}>
                    Login
                  </NavLink>
                  <NavLink to="/signup" icon={<FaUserPlus />} style={{ marginRight: '10px' }}>
                    Signup
                  </NavLink>
                </div>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>


      {/* Navbar for larger screens (top position) */}
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'whitesmoke', color: "#fff", position: 'fixed', top: 0, width: '100%', zIndex: 999 }} className="d-none d-lg-block">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: 'black' }}>
            Grocery Stage
          </Navbar.Brand>
          <Nav className="ms-auto">
            {isLoggedIn ? (
              <>
                <NavLink to="/cart" icon={<FaShoppingCart />} count={cartItemCount} />
                <NavLink to="/categories" icon={<FaListAlt />} />
                <NavLink to="/products" icon={<FaBoxes />} />
                <NavLink to="/orders" icon={<FaClipboardList />} count={ordersCount} />
                
                <Button variant="outline-dark" onClick={handleLogout}>
                  <FaSignOutAlt />
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/cart" icon={<FaShoppingCart />} count={cartItemCount} />
                <NavLink to="/categories" icon={<FaListAlt />} />
                <NavLink to="/orders" icon={<FaClipboardList />} count={ordersCount} />
                <NavLink to="/products" icon={<FaBoxes />} />
                <NavLink to="/login" icon={<FaSignInAlt />}>
                  Login
                </NavLink>
                <NavLink to="/signup" icon={<FaUserPlus />}>
                  Signup
                </NavLink>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

const NavLink = ({ to, icon, count }) => (
  <Nav.Link as={Link} to={to} style={{ color: 'black', position: 'relative', marginLeft: '10px' }}>
    {icon}
    {count > 0 && <Badge bg="secondary" className="position-absolute top-0 start-100 translate-middle">{count}</Badge>}
  </Nav.Link>
);
