// routes/profile.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { authUser } = require("../middleware/auth");

// Create user profile
router.post('/user-profile',  async (req, res) => {
  try {
    const { name, MobileNumber, address } = req.body;
    const userProfile = new User({
      name,
      email: req.user.email,
      MobileNumber,
      address,
      userId: req.user._id
    });
    await userProfile.save();
    res.status(201).json(userProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update user profile by email
router.put('/user-profile/:email',  async (req, res) => {
  try {
    const userProfile = await User.findOne({ email: req.params.email });
    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }
    Object.assign(userProfile, req.body);
    await userProfile.save();
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete user profile by email
router.delete('/user-profile/:email', authUser, async (req, res) => {
  try {
    const userProfile = await User.findOne({ email: req.params.email });
    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }
    await userProfile.remove();
    res.json({ message: 'User profile deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
