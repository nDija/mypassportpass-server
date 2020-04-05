const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    zipCode: {
        type: Number
    },
    email: {
        type: String
    }
});

const User = mongoose.model('User', schema);
module.exports.User = User;