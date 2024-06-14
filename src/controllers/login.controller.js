const loginCtrlr = {};

loginCtrlr.getLogin = ((req, res) => res.send('Login route'));
loginCtrlr.saveLogin = ((req, res) => res.send('Login saved'));

module.exports = loginCtrlr;