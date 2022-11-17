const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 20,
    },
    profilePiture: {
        type: String,
        default: ""

    },
    coverPiture: {
        type: String,
        default: ""

    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        defaut: false
    },
    desc: {
        type: String,

    },
    city: {
        type: String,
        max: 50
    },

}, {
    timestamps: true
})
module.exports = mongoose.model("User", UserSchema)