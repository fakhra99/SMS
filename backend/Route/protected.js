

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/admin', auth, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  res.json({ message: 'Welcome Admin!' });
});

router.get('/user', auth, (req, res) => {
  res.json({ message: 'Welcome User!' });
});

module.exports = router;
