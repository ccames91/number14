const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get('/api/data', async (req, res) => {
  try {
    const data = await db.YourModel.findAll();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/api/data', async (req, res) => {
  try {
    const { newData } = req.body;

    const createdData = await db.YourModel.create({ property: newData });

    res.json(createdData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
