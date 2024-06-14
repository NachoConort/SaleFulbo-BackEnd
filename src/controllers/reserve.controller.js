const reserveCtrlr = {};

reserveCtrlr.getReserves = ((req, res) => res.send('Reserve route'));
reserveCtrlr.getReserve = ((req, res) => res.send('Reserve route'));
reserveCtrlr.saveReserve = ((req, res) => res.send('Reserve saved'));
reserveCtrlr.updateReserve = ((req, res) => res.send('Reserve updated'));
reserveCtrlr.deleteReserve = ((req, res) => res.send('Reserve deleted'));

module.exports = reserveCtrlr;