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

router.put('/:id', auth, async (req, res, next) => {
  const { id } = req.params;
  const { field, newValue } = req.body;

  try {
    await updateUserField(id, field, newValue);
    res.send('Profile updated and change logged.');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
