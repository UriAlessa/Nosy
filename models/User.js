//crear data
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  coins: { type: Number, default: 0 },
  friends: [{ type: mongoose.Types.ObjectId, path: "user" }],
  friend_requests: [{ type: mongoose.Types.ObjectId, path: "user" }],
  admin: { type: Boolean, default: false },
  facebook: { type: Boolean, default: false },
  google: { type: Boolean, default: false },
  // game request
  // 
});

module.exports = mongoose.model("user", userSchema);
