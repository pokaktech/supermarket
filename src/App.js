
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Advertisements from './components/Advertisements';
import AdminDashboard from './components/AdminDashboard';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import NavBar from './components/Navbar';
import SpecialOffersList from './components/SpecialOffersList';
import UserActivity from "./components/UserActivity";
import TagList from "./components/TagsList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
       <NavBar/>
      <div className="App">
       
        <Routes>
          <Route path="/admin-login" element={<Login />} />
        
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/ads" element={<Advertisements />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/tags" element={<TagList />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/special-offers-list" element={<SpecialOffersList />} />
          <Route path="/user-activity" element={<UserActivity />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
