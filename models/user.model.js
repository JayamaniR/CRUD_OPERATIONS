const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"]
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Please enter a password"]
    },
    role:{
      type:String,
      required:[true, "Please enter a role"]
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("Users", UserSchema);

module.exports = User;
