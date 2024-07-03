import React, { useState } from 'react';
import axios from 'axios';

export default function AddCategoryModal({ show, handleClose, refreshCategories }) {
  const [newCategoryTitle, setNewCategoryTitle] = useState('');
  const [newCategoryImage, setNewCategoryImage] = useState('');

  const handleAddCategory = async () => {
    try {
      const requestData = {
        name: newCategoryTitle,
        image: newCategoryImage
      };

      await axios.post('http://127.0.0.1:8000/accounts/categories/', requestData);

      refreshCategories(); // Refresh categories after adding a new one
      handleClose(); // Close the modal
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Category</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="categoryTitle">Category Title</label>
                <input type="text" className="form-control" id="categoryTitle" value={newCategoryTitle} onChange={(e) => setNewCategoryTitle(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="categoryImage">Category Image</label>
                <input type="text" className="form-control-file" id="categoryImage"  onChange={(e) => setNewCategoryImage(e.target.value)} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleAddCategory}>Add Category</button>
          </div>
        </div>
      </div>
    </div>
  );
}
