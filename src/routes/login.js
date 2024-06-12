const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Login route'))

module.exports = router;