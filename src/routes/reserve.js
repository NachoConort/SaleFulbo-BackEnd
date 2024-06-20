const { Router } = require('express');
const router = Router();
const { getReserves, saveReserve, deleteReserve } = require('../controllers/reserve.controller');

router.route('/:id')
    .get(getReserves)
    .post(saveReserve)
    .delete(deleteReserve);

module.exports = router;