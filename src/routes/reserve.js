const { Router } = require('express');
const router = Router();
const { getReserves, getReserve, saveReserve, updateReserve, deleteReserve } = require('../controllers/reserve.controller');

router.route('/')
    .get(getReserves)
router.route('/:id')
    .post(saveReserve)
    .get(getReserve)
    .delete(deleteReserve)
    .put(updateReserve)

module.exports = router;