const loginCtrlr = {};
const userModel = require('../models/User');

loginCtrlr.getUser = async (req, res) => {
    const { user, password } = req.body;
    userModel.findOne({ user }).then((usuario) => {
        if(!usuario) {
            return res.json('Usuario no encontrado');
        }

        if(password == usuario.password) {
            const { name, _id } = usuario;
            res.json
            ({
                mensaje: 'Sesión iniciada con el usuario:',
                usuario: name,
                id: _id
            });
        } else {
            res.json('Usuario o contraseña incorrecto');
        }
    })
};

module.exports = loginCtrlr;

