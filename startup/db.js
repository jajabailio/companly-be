
const mongoose = require('mongoose');
const uri = "mongodb+srv://jajabailio:abcdefg123123@coffee.v9vhy.mongodb.net/companly?retryWrites=true&w=majority";

module.exports = function () {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => { console.error('Mongoose connect error: ', err) });
}