const { Router } = require('express');
const router = Router();
const { getUser } = require('../controllers/login.controller');

router.route('/')
    .get(getUser);

module.exports = router;