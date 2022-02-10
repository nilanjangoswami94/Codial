const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true 
    },

    name: {
        type: String,
        required: true
    }
},{
    //for recording the time it's created and updated
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;