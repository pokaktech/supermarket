const express = require('express');
const router = express.Router();
const { Product } = require('../models/category');

// Add tag to product
router.post('/products/:productId/tags', async (req, res) => {
  const { productId } = req.params;
  const { name } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.tags.push(name);
    await product.save();

    res.status(201).json(product.tags);
  } catch (error) {
    console.error('Error adding tag:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update tag in product
router.put('/products/:productId/tags', async (req, res) => {
  const { productId } = req.params;
  const { name, newName } = req.body;
  console.log(name, newName )

  try {
    const product = await Product.findById(productId);
    console.log(product)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const index = product.tags.indexOf(name);
    if (index === -1) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    product.tags[index] = newName;
    await product.save();

    res.status(200).json(product.tags);
  } catch (error) {
    console.error('Error updating tag:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete tag from product
router.delete('/products/:productId/tags', async (req, res) => {
  const { productId } = req.params;
  const { name } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.tags = product.tags.filter(tag => tag !== name);
    await product.save();

    res.status(200).json(product.tags);
  } catch (error) {
    console.error('Error deleting tag:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
