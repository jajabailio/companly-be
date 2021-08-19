const express = require('express');
const cors = require('cors');

module.exports = function (app) {
    app.use(cors());
    app.use('/api/companies', require('../routes/companies'));
    app.use('/api/users', require('../routes/users'));
}