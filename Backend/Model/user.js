const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  methods: {
    type: [String],
    required: true
  },
  local: {
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    }
  },
  google: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  },
  facebook: {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    }
  }
});

userSchema.pre('save', async function (next) {
  try {
    console.log('entered');
    if (!this.methods.includes('local')) {
      next();
    }

    const user = this;

     if (!user.isModified('local.password')) {
      next();

    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(this.local.password, salt);

    this.local.password = passwordHash;
    console.log('exited');
    next();
  }} catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.local.password);
  } catch (error) {
    throw new Error(error);
  }
}


const User = mongoose.model('user', userSchema);


module.exports = User;

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
