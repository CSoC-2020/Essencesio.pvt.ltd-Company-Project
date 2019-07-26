const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    FirstName: { type: String, require: true },
    LastName: {type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    discription: { type: String},
    about: { type: String }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
