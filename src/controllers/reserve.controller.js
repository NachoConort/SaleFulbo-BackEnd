const reserveCtrlr = {};
const User = require('../models/User');

reserveCtrlr.getReserves = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { reserves } = user;
        res.json(reserves);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

reserveCtrlr.saveReserve = async (req, res) => {
    const { email, name, date, time, footballType } = req.body;
    
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newReserve = {
            email: email,
            name: name,
            date: date,
            time: time,
            footballType: footballType
        };

        user.reserves.push(newReserve);

        await user.save();

        res.status(201).json({ message: 'Reserve saved successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

reserveCtrlr.deleteReserve = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const reserveIndex = user.reserves.findIndex(reserve => reserve.email === email);
        if (reserveIndex === -1) {
            return res.status(404).json({ message: 'Reserve not found' });
        }

        user.reserves.splice(reserveIndex, 1)

        await user.save();

        res.status(200).json({ message: 'Reserve deleted successfully', user });
    } catch (error) {
        console.error('Error deleting reserve:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = reserveCtrlr;