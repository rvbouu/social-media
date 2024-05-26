// imports
const router = require('express').Router();
const apiRoutes = require('./api');

// middleware
router.use('/api', apiRoutes);
router.use((req, res) => {
  return res.send('Wrong route, please try again.');
});

// exports
module.exports = router;