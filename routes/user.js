// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password, } = req.body;
    console.log(username, email, password);
    console.log(req.body);
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, isAdmin: false});
    console.log(newUser);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ _id: user._id.toString() }, 'your_jwt_secret');
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Admin Signup


router.post('/admin/signup/email-check', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if an admin with the same email already exists
    const existingAdmin = await User.findOne({ email: email, isAdmin: true });
    if (existingAdmin) {
      return res.status(200).json({ exists: true });
    }

    res.status(200).json({ exists: false });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/admin/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let admin = await User.findOne({ email });
    if (admin) return res.status(400).json({ message: 'Admin already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    admin = new User({ username, email, password: hashedPassword,  isAdmin: true }); // Set isAdmin to true
    await admin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
    // await sendSMSToAdmin(MobileNumber, `New admin registered: ${name}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




router.get('/admin/email/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const admin = await User.findOne({ email: email, isAdmin: true });
    if (admin) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// Admin Login
router.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    console.log(user);
    if (!user) return res.status(401).json({ msg: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) return res.status(401).json({ msg: 'Invalid Credentials' });

    // Check if the user is an admin and set isAdmin to true
    if (user.isAdmin) {
      const payload = { admin: { id: user.id } };
      console.log(payload);
      jwt.sign(payload, 'adminJwtSecret', (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } else {
      // If the user is not an admin, proceed with regular user login
      const payload = { user: { id: user.id } };
      jwt.sign(payload, 'jwtSecret', { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
