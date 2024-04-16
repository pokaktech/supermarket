const express = require('express');
const router = express.Router();
const multer = require('multer');
const jwt = require('jsonwebtoken');
const { authUser } = require('../middleware/auth');
const { Category, Product } = require('../models/category');
const User = require('../models/user');
const path=require("path");
const storage = multer.diskStorage({
  destination: "uploads/categoryImage/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
 // 'image' is the name of the field in your form

// Middleware to verify admin token
const verifyAdminToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ msg: 'No token, authorization denied' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token found in authorization header' });

  try {
    const decoded = jwt.verify(token, 'adminJwtSecret');
    if (!decoded.admin) {
      return res.status(403).json({ msg: 'You are not authorized to perform this action' });
    }
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};



// Get all categories (accessible to all users)
router.get('/categoriess',  async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find({ range: true }); // Only fetch categories where range is true
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get products based on range (accessible to all users)
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({ range: true }); // Only fetch products where range is true
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/productsss', async (req, res) => {
  try {
    const products = await Product.find(); // Only fetch products where range is true
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.put('/categories/:categoryId/range', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.categoryId, { range: req.body.range }, { new: true });
    console.log(category);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Product Routes
router.put('/products/:productId/range',  async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId, { range: req.body.range }, { new: true });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all products (accessible to all users)
router.get('/productss', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Add routes for updating inStock status
router.put('/products/:productId/inStock', async (req, res) => {
  try {
    const { productId } = req.params;
    const { inStock } = req.body;
    
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    product.inStock = inStock;
    await product.save();
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/products/:productId/tags', async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Assuming tags are stored in the product object
    const tags = product.tags;
    res.json(tags);
  } catch (error) {
    console.error('Error fetching tags for product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Add routes for fetching inStock and out of stock products
router.get('/products/inStock', async (req, res) => {
  try {
    const inStockProducts = await Product.find({ inStock: true });
    res.status(200).json(inStockProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/products/tags/:tag", async (req, res) => {
  try {
    const tag = req.params.tag;
    const products = await Product.find({ tags: tag });

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all unique tags
router.get("/products/tags", async (req, res) => {
  try {
    const tags = await Product.distinct("tags");

    res.json(tags);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post('/products/tags', async (req, res) => {
  try {
    const { tag } = req.body;
    const newTag = await Product.create({ tags: [tag] });
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT Endpoint for Updating a Tag


// DELETE Endpoint for Deleting a Tag
router.delete('/products/tags/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/products/outOfStock', async (req, res) => {
  try {
    const outOfStockProducts = await Product.find({ inStock: false });
    res.status(200).json(outOfStockProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/categorie", async (req, res) => {
  try {
    const categories = await Category.find().populate("products");
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/products/:categoryTitle', async (req, res) => {
  const categoryTitle = req.params.categoryTitle;

  try {
    // Fetch products based on the provided category title
    const category = await Category.findOne({ title: categoryTitle });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category.products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post('/categories',  async (req, res) => {
  try {
    const { title,image } = req.body;
    console.log(req.body);
    const category = new Category({ title, image });
    console.log(category);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

  
  // Delete a category by ID (accessible to admin only)
  router.delete('/categories/:categoryId', async (req, res) => {
    try {
      const category = await Category.findByIdAndDelete(req.params.categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update a category by ID (accessible to admin only)
  router.put('/categories/:categoryId', async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true });
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Add a new product (accessible to admin only)
  router.post('/products', async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Delete a product by ID (accessible to admin only)
  router.delete('/products/:productId',  async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update a product by ID (accessible to admin only)
  router.put('/products/:productId',async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.put('/products/tags/:tag', async (req, res) => {
    try {
      const { tag } = req.params;
      const { newTag } = req.body;
  
      // Update products with the specified tag by adding the new tag
      const updatedProducts = await Product.updateMany({ tags: tag }, {
        $addToSet: { tags: newTag }
      });
  
      res.json({ message: `${updatedProducts.nModified} product(s) updated successfully` });
    } catch (error) {
      console.error('Error updating products by tag:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete products by tag
  router.delete('/products/tags/:tag', async (req, res) => {
    try {
      const { tag } = req.params;
      
      // Delete products with the specified tag
      const deletedProducts = await Product.deleteMany({ tags: tag });
  
      res.json({ message: `${deletedProducts.deletedCount} product(s) deleted successfully` });
    } catch (error) {
      console.error('Error deleting products by tag:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  router.delete('/products/tags/:name', async (req, res) => {
    try {
      const { name } = req.params;
      // Update all products that contain the tag to remove the tag
      const result = await Product.updateMany(
        { tags: name }, // Find products that contain the tag
        { $pull: { tags: name } }, // Pull (remove) the tag from the tags array
        { multi: true } // Update multiple documents
      );
      res.json({ message: 'Tag deleted successfully', result });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  
module.exports = router;
