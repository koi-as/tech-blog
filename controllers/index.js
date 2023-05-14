const router = require('express').Router();
const home = require('./homePage.js');
const dashboard = require('./dashboard.js');
const users = require('./api');

// localhost:9352/
router.use('/', home);
// localhost:9352/dashboard
router.use('/dashboard', dashboard);
// localhost:9352/users
router.use('/users', users);

module.exports = router;