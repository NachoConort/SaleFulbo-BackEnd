const usersCtrlr = {};
const userModel = require('../models/User');

usersCtrlr.getUsers = async (req, res) => {
    const users = await userModel.find()
    res.json(users);
};

usersCtrlr.getUser = async (req, res) => {
    const user = await userModel.findById(req.params.id);
    res.json(user);
};

usersCtrlr.saveUser = async (req, res) => {
    const { user, password, name, address, openTime, closeTime, pricing } = req.body;
    const newUser = new userModel({
        user: user,
        password: password,
        name: name,
        address: address,
        openTime: openTime,
        closeTime: closeTime,
        pricing: pricing
    });
    await newUser.save();
    res.json('User saved');
};

usersCtrlr.updateUser = async (req, res) => {
    const { user, password, name, address, openTime, closeTime, pricing } = req.body;
    await userModel.findByIdAndUpdate(req.params.id, {
        user: user,
        password: password,
        name: name,
        address: address,
        openTime: openTime,
        closeTime: closeTime,
        pricing: pricing
    });
    res.json('User updated');
};

usersCtrlr.deleteUser = async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id);
    res.json('User deleted');
};

module.exports = usersCtrlr;