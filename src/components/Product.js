import React, { useState, useEffect } from 'react';
import { useCart } from './ContextReducer';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from "./Footer"
export default function Product() {
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]); // State to store all products
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [otherProducts, setOtherProducts] = useState([]); // State to store other products
  const [viewingOtherProducts, setViewingOtherProducts] = useState(false);

  const { categoryTitle } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${categoryTitle}`);
        setProducts(response.data); // Set the array of products received from the backend
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryTitle]);

  useEffect(() => {
    const fetchOtherProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/productss');
        const allProducts = response.data;
        const filteredProducts = allProducts.filter(product => product.category !== categoryTitle);
        setOtherProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching other products:', error);
      }
    };

    fetchOtherProducts();
  }, [categoryTitle]);

  useEffect(() => {
    // Update selectedProduct when cart changes to reflect the latest quantity
    const cartProduct = cart.find(item => item.id === selectedProduct?.id);
    if (cartProduct) {
      setSelectedProduct(cartProduct);
      setQuantity(cartProduct.quantity);
    }
  }, [cart, selectedProduct]);

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleQuantityChange = (e) => {
    const value = parseFloat(e.target.value);
    setQuantity(value);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    handleCloseModal();
    navigate('/cart');
  };

  const handleViewOtherProducts = () => {
    setViewingOtherProducts(!viewingOtherProducts);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: '1 1 auto' }}>
        <br/><br/><br/><br/><br/>
        <h2 style={{"textAlign":"left"}}>{categoryTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gridGap: '10px', justifyContent: 'center' }}>
          {products.map((product) => (
            <Card key={product.id} style={{ width: '150px', border: '1px solid lightgray' }}>
              <Card.Img variant="top" src={product.imageUrl} style={{ height: '100px', objectFit: 'cover' }} />
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: Rs. {(product.price * quantity).toFixed(2)}</Card.Text>
                </div>
                <Button variant="primary" onClick={() => handleCardClick(product)} style={{"backgroundColor":"blue"}}>Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        {viewingOtherProducts && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gridGap: '10px', justifyContent: 'center', marginTop: '50px' }}>
            {otherProducts.map((product) => (
              <Card key={product.id} style={{ width: '150px', border: '1px solid lightgray' }}>
                <Card.Img variant="top" src={product.imageUrl} style={{ height: '100px', objectFit: 'cover' }} />
                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: Rs. {(product.price * quantity).toFixed(2)}</Card.Text>
                  </div>
                  <Button variant="primary" onClick={() => handleCardClick(product)} style={{"backgroundColor":"blue"}}>Add to Cart</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}

        {!viewingOtherProducts && (
          <Button onClick={handleViewOtherProducts} style={{ width: '250px', "backgroundColor":"blue",alignItems: 'center', margin: '0 auto', display: 'block',marginTop: '50px' }}>View Other Products</Button>
        )}

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add to Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Product: {selectedProduct?.name}</p>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" min="0" step="0.25" value={quantity} onChange={handleQuantityChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal} style={{"backgroundColor":"green"}}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddToCart} style={{"backgroundColor":"blue"}}>
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer/>
    </div>
  );
}