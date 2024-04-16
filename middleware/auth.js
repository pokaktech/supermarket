// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');


// Middleware to authenticate users
const authUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization');

    if (!token || !token.startsWith('Bearer ')) {
      throw new Error('Unauthorized');
    }

    const decoded = jwt.verify(token.replace('Bearer ', ''), 'your_jwt_kfhhdsecret');
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error('Unauthorized');
    }

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};


// Middleware to authenticate admins
const authAdmin = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const admin = await  User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!admin) {
      throw new Error();
    }

    req.token = token;
    req.admin = admin;

    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate as an admin.' });
  }
};

module.exports = { authUser };
