const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  fullName: String,
  email: String,
  mobile: Number,
  password: String,
},{timestamps:true});

const UserModal = model("User", userSchema);

module.exports = UserModal;
