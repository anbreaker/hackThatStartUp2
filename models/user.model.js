const { Schema, model } = require('mongoose');

const UserSchema = Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is Mandatory'],
    },
    email: {
      type: String,
      required: [true, 'Email is Mandatory'],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Password is Mandatory'],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = model('User', UserSchema);
