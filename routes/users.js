//routes/users.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllUsers, updateUserField } = require('../models/userModel');

router.get('/', async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { field, newValue } = req.body;

  if (!['public_profile', 'private_profile'].includes(field)) {
    return res.status(400).send('Invalid field');
  }

  try {
    await pool.query(`UPDATE users SET ${field} = $1 WHERE id = $2`, [newValue, id]);
    res.send('Update successful');
  } catch (err) {
    console.error(err);
    res.status(500).send('Update failed');
  }
});


module.exports = router;
