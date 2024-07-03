import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Form, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import './Product.css';

export default function Products() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/accounts/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async () => {
    if (selectedProduct && quantity > 0) {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/accounts/add-to-cart/${selectedProduct.id}/`,
          { qty: quantity }
        );

        if (response.status === 201) {
          handleCloseModal();
          navigate('/cart');
        } else {
          console.log('Error adding to cart');
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    } else {
      console.log('Invalid product or quantity');
    }
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleQuantityChange = (e) => {
    const value = parseFloat(e.target.value);
    setQuantity(value);
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products alphabetically in ascending order
  const sortedProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div style={{ backgroundColor: 'whitesmoke', minHeight: '100vh', color: '#fff' }}>
      {/* Search input */}
      <br />
      <br />
      <br />
      <br />
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search products"
          aria-label="Search products"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <p style={{ color: 'black' }}>Products Found: {sortedProducts.length}</p>
      <h2>Featured Products</h2>

      {/* Featured Products Grid */}
      <div className="featured-products-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '10px' }}>
        {sortedProducts.map((product, index) => (
          <Card
            key={index}
            className="featured-product-card"
            style={{ width: '200px', height: '300px', display: 'flex', flexDirection: 'column' }}
          >
            <Card.Img variant="top" src={product.image} style={{ objectFit: 'cover', width: '100%', height: '50%' }} />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Price: Rs. {product.price}</Card.Text>
              <Button onClick={() => handleCardClick(product)} style={{ backgroundColor: 'blue' }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product: {selectedProduct && selectedProduct.name}</p>
          <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" min="1" step="1" value={quantity} onChange={handleQuantityChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} style={{ backgroundColor: 'green' }}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCart} style={{ backgroundColor: 'blue' }}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
}
