import React, { useState, useEffect } from 'react';
import { Modal, Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import './CategoryList.css'; // Import the CSS file

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', image: null });
  const [editCategory, setEditCategory] = useState({ id: null, name: '', image: null });
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/categories/');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleFileChange = (event, setCategory) => {
    const file = event.target.files[0];
    setCategory(prevState => ({ ...prevState, image: file }));
  };

  const handleAddCategory = async () => {
    try {
      const formData = new FormData();
      formData.append('name', newCategory.name);
      formData.append('image', newCategory.image);
      await axios.post('http://127.0.0.1:8000/accounts/categories/', formData);
      console.log(newCategory.name,newCategory.image)
      setShowModal(false);
      fetchCategories();
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleEditCategory = async () => {
    try {
      const formData = new FormData();
      formData.append('name', editCategory.name);
      if (editCategory.image) {
        formData.append('image', editCategory.image);
      }
      await axios.put(`http://127.0.0.1:8000/accounts/categories/${editCategory.id}/`, formData);
      console.log(editCategory.name,editCategory.image)
      setShowEditModal(false);
      fetchCategories();
    } catch (error) {
      console.error('Error updating category:', error.response.data);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/accounts/categories/${categoryId}/`);
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <Container fluid className="containers">
      <h1>Categories List</h1>
      <Row className="category-row">
        {categories.map(category => (
          <Col key={category.id} className="mb-3">
            <Card className="category-card">
              <Card.Img variant="top" src={category.image} className="image-wrapper" />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Button variant="warning" onClick={() => {
                  setEditCategory({ id: category.id, name: category.name, image: null });
                  setShowEditModal(true);
                }}>Edit</Button>
                <Button variant="danger" onClick={() => handleDeleteCategory(category.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Button variant="success" onClick={() => setShowModal(true)}>Add Category</Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formCategoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" placeholder="Enter category name" value={newCategory.name} onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Category Image</Form.Label>
              <Form.Control type="file" onChange={(e) => handleFileChange(e, setNewCategory)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAddCategory}>Add Category</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formEditCategoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" placeholder="Enter category name" value={editCategory.name} onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Category Image</Form.Label>
              <Form.Control type="file" onChange={(e) => handleFileChange(e, setEditCategory)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleEditCategory}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CategoryList;
