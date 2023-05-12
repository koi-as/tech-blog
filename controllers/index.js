const router = require('express').Router();
const home = require('./homePage.js');
const dashboard = require('./dashboard.js')

router.use('/', home);
router.use('/dashboard', dashboard);

module.exports = router;