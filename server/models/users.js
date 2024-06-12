const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: false
    },
    surname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    }],
    follow: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    }]
}, { timestamps: true, strict: true })

UsersSchema.pre('save', async function (next) {
    if (this.password) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
            next();
        } catch (error) {
            next(error);
        }
    }
})

module.exports = mongoose.model('UsersModel', UsersSchema, 'users');
