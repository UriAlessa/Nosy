//crear data
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  friends: [{ type: mongoose.Types.ObjectId, path: "user" }],
  fb: { type: Boolean, default: false },
  google: { type: Boolean, default: false },
});

module.exports = mongoose.model("user", userSchema);
