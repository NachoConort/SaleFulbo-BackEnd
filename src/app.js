const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', 4000);

app.use(cors());
app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));
app.use('/reserve', require('./routes/reserve'));

module.exports = app;