import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Table, Dropdown, Image } from 'semantic-ui-react';
import './Ads.css';

const Advertisements = () => {
  const [ads, setAds] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const [form, setForm] = useState({ title: '', image: null, description: '', category: '' });
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editId, setEditId] = useState(null);

  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  };

 

  const fetchAds = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/ads/');
      setAds(response.data);
    } catch (error) {
      console.error('Error fetching ads:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/categories/');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchAds();
    fetchCategories();
  }, []);

  const handleDropdownChange = (e, data) => {
    setForm({
      ...form,
      [data.name]: data.value,
    });
  };

  const handleChange = (e, data) => {
    const { name, value, files } = e.target || data;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('image', form.image);
    formData.append('description', form.description);
    formData.append('category', form.category);
    

    try {
      await axios.post('http://127.0.0.1:8000/accounts/ads/', formData);
      setForm({ title: '', image: null, description: '', category: ''});
      fetchAds();
      setAddModalVisible(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('image', form.image);
    formData.append('description', form.description);
    formData.append('category', form.category);
    

    try {
      await axios.put(`http://127.0.0.1:8000/accounts/ads/${editId}/`, formData);
      setForm({ title: '', image: null, description: '', category: ''});
      setEditModalVisible(false);
      fetchAds();
    } catch (error) {
      console.error('Error updating form:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/accounts/ads/${id}/`);
      fetchAds();
    } catch (error) {
      console.error('Error deleting ad:', error);
    }
  };

  const handleEdit = (ad) => {
    setForm({
      title: ad.title,
      image: null,
      description: ad.description,
      category: ad.category.id,
      
    });
    setEditId(ad.id);
    setEditModalVisible(true);
  };

  

  

  return (
    <div className="App">
      <h1>Ads Management</h1>
      <Button primary onClick={() => setAddModalVisible(true)}>Add Ad</Button>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
          
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ads.map(ad => (
            <Table.Row key={ad.id}>
              <Table.Cell>{ad.title}</Table.Cell>
              <Table.Cell><Image src={ad.image} size='small' /></Table.Cell>
              <Table.Cell>{ad.description}</Table.Cell>
              <Table.Cell>{getCategoryName(ad.category)}</Table.Cell>
              
              <Table.Cell>
                <Button onClick={() => handleEdit(ad)}>Edit</Button>
                <Button color='red' onClick={() => handleDelete(ad.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal open={addModalVisible} onClose={() => setAddModalVisible(false)}>
        <Modal.Header>Add Ad</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Image</label>
              <input
                name="image"
                type="file"
                onChange={handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Category</label>
              <Dropdown
                placeholder='Select Category'
                fluid
                search
                selection
                name='category'
                options={categories.map(category => ({
                  key: category.id,
                  text: category.name,
                  value: category.id
                }))}
                value={form.category}
                onChange={handleDropdownChange}
                required
              />
            </Form.Field>
           
            <Button type='submit' primary>Add</Button>
          </Form>
        </Modal.Content>
      </Modal>

      <Modal open={editModalVisible} onClose={() => setEditModalVisible(false)}>
        <Modal.Header>Edit Ad</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleUpdate}>
            <Form.Field>
              <label>Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Image</label>
              <input
                name="image"
                type="file"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
            </Form.Field>
            <Form .Field>
              <label>Category</label>
              <Dropdown
                placeholder='Select Category'
                fluid
                search
                selection
                name='category'
                options={categories.map(category => ({
                  key: category.id,
                  text: category.name,
                  value: category.id
                }))}
                value={form.category}
                onChange={handleDropdownChange}
                required
              />
            </Form.Field>
           
            <Button type='submit' primary>Update</Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Advertisements;

