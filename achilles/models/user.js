const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    shops: [String],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;