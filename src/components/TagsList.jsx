import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Card, Container, Row, Col } from 'react-bootstrap';

const TagsList = () => {
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [selectedTagName, setSelectedTagName] = useState('');
  const [newTagName, setNewTagName] = useState('');
  const [updatedTagName, setUpdatedTagName] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/productss');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddTag = async () => {
    try {
      await axios.post(`http://localhost:5000/products/${selectedProductId}/tags`, { name: newTagName });
      setShowAddModal(false);
      // Refresh products after adding tag
      const updatedProducts = await axios.get('http://localhost:5000/products');
      setProducts(updatedProducts.data);
    } catch (error) {
      console.error('Error adding tag:', error);
    }
  };

  const handleUpdateTag = async () => {
    try {
      await axios.put(`http://localhost:5000/products/${selectedProductId}/tags`, { name: selectedTagName, newName: updatedTagName });
      setShowUpdateModal(false);
      // Refresh products after updating tag
      const updatedProducts = await axios.get('http://localhost:5000/products');
      setProducts(updatedProducts.data);
    } catch (error) {
      console.error('Error updating tag:', error);
    }
  };

  const handleDeleteTag = async (productId, tagName) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}/tags`, { data: { name: tagName } });
      // Refresh products after deleting tag
      const updatedProducts = await axios.get('http://localhost:5000/products');
      setProducts(updatedProducts.data);
    } catch (error) {
      console.error('Error deleting tag:', error);
    }
  };

  return (
    <Container>
      <h2 className="text-center mt-4 mb-4">Tags List</h2>
      {products.map(product => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <Row>
            {product.tags.map(tag => (
              <Col key={tag} xs={12} md={6} lg={4} className="mb-3">
                <Card>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{tag}</span>
                      <div>
                        <Button variant="primary" onClick={() => { setShowUpdateModal(true); setSelectedProductId(product._id); setSelectedTagName(tag); setUpdatedTagName(''); }}>Update</Button>
                        <Button variant="danger" onClick={() => handleDeleteTag(product._id, tag)} className="ml-2">Delete</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Card className="mt-3">
            <Card.Body>
              <Form.Control
                type="text"
                placeholder="New Tag"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setNewTagName(e.target.value);
                    handleAddTag();
                    e.target.value = '';
                  }
                }}
              />
              <Button variant="success" onClick={() => { setShowAddModal(true); setSelectedProductId(product._id); }} className="mt-2">Add Tag</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
      {/* Add Tag Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Enter New Tag Name" value={newTagName} onChange={(e) => setNewTagName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddTag}>Add Tag</Button>
        </Modal.Footer>
      </Modal>
      {/* Update Tag Modal */}
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Tag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Enter Updated Tag Name" value={updatedTagName} onChange={(e) => setUpdatedTagName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleUpdateTag}>Update Tag</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TagsList;
