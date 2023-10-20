const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await db.User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = await db.User.create({
      username,
      password: hashedPassword,
    });

    res.json({ message: 'Registration successful', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    
    const user = await db.User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    req.session.user = user;

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ message: 'Logout successful' });
  });
});

module.exports = router;
