// otherControllers.js

// Import any necessary dependencies and models
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/other-data', async (req, res) => {
  try {
    const otherData = await db.OtherModel.findAll();
    res.json(otherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
