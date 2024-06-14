const { Router } = require('express');
const router = Router();
const { getUsers, saveUser, getUser, deleteUser, updateUser } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(saveUser);
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;