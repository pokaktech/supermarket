
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Orders from './components/Orders';
import Categories from './components/Categories';
import CustomNavbar from './components/Navbar';
import Products from './components/Products';
import Signup from './components/Signup';
import Login from './components/Login';

import ForgotPassword from "./components/ForgotPassword";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import { CartProvider } from './components/ContextReducer'; // Import the CartProvider
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by checking the presence of a token in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn based on whether token exists
  }, []);

  return (
    <Router>
      <CartProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="App">
          <CustomNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        
        
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
           
            {!isLoggedIn && (
              <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            )}
            <Route path="/products/:categoryTitle" element={<Product />} />
          </Routes>
        </div>
        </ThemeProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
