const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        console.log(newUser);

        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;