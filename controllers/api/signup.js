const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        console.log(newUser);

        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;