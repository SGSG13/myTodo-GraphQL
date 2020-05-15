const mongoose = require('mongoose');
const config = require('./config');

function connectDB() {
    return (
        mongoose.connect(config.databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    )
}

module.exports = connectDB;

