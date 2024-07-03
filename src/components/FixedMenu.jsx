import React, { useEffect, useState } from 'react';
import { Button, Modal } from '@mui/material';
import { Link } from "react-router-dom";
import './FixedMenu.css';

export default function FixedMenu() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('http://127.0.0.1:8000/accounts/categories/');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="main">
      <div className="scrollmenu">
        {categories.map((category, index) => (
          <Link key={index} onClick={() => handleCategoryClick(category)} className="scrollmenu-item" to='/categories'>
            {category.name}
          </Link>
        ))}
      </div>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-content">
          <h2>{selectedCategory?.name}</h2>
          <Button onClick={handleCloseModal}>Close</Button>
        </div>
      </Modal>
    </div>
  );
}
