const usersCtrlr = {};

usersCtrlr.getUsers = ((req, res) => res.send('Users route'));
usersCtrlr.getUser = ((req, res) => res.send('User route'));
usersCtrlr.saveUser = ((req, res) => res.send('User saved'));
usersCtrlr.updateUser = ((req, res) => res.send('User updated'));
usersCtrlr.deleteUser = ((req, res) => res.send('User deleted'));

module.exports = usersCtrlr;