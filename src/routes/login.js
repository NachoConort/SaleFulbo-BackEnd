const { Router } = require('express');
const router = Router();
const { getLogin, saveLogin } = require('../controllers/login.controller');

router.route('/')
    .get(getLogin)
    .post(saveLogin);

module.exports = router;