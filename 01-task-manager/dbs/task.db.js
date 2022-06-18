const mongoose = require('mongoose');

const connectionString = '';

const connectDB = (uri) => {
    mongoose.connect(uri)
        .then(() => console.log('Connect DB'))
        .catch((err) => console.log(err));
}

module.exports = connectDB;
