const router = require('express').Router();
const login = require('./login.js');
const signup = require('./signup.js');

// localhost:9352/users/login
router.use('/login', login)
// localhost:9352/users/signup
router.use('/signup', signup);

module.exports = router;