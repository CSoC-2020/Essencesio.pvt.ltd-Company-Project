const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  discription: { type: String},
  about: { type: String }

});

const User = mongoose.model('user', userSchema);


module.exports = User;

module.exports = mongoose.model("User", userSchema);
