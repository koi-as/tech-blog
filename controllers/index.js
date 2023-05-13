const router = require('express').Router();
const home = require('./homePage.js');
const dashboard = require('./dashboard.js');
const login = require('./login.js');
const signup = require('./signup.js');

router.use('/', home);
router.use('/dashboard', dashboard);
router.use('/login', login);
router.use('/signup', signup);

module.exports = router;