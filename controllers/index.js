const router = require('express').Router();
const home = require('./homePage.js');

router.use('/', home);

module.exports = router;