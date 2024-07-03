// ProductRangeModal.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const ProductRangeModal = ({ productId ,adminToken}) => {
  const [range, setRange] = useState('');

  const handleRangeChange = (e) => {
    setRange(e.target.value);
  };

  const handleUpdateRange = async () => {
    try {
      await axios.put(`http://localhost:5000/products/${productId}/range`, { range },{ headers: { Authorization: `Bearer ${adminToken}` } });
      // Optionally, update state or trigger a refresh of the product data
    } catch (error) {
      console.error('Error updating product range:', error);
    }
  };

  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Set Product Range</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="productRange">
          <Form.Label>Range</Form.Label>
          <Form.Control type="text" value={range} onChange={handleRangeChange} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={handleUpdateRange}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductRangeModal;
