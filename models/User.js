//crear data
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  connected: { type: Boolean, default: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  coins: { type: Number, default: 0 },
  statistics: {
    multi_player: {
      total: { type: Number, default: 0 },
      wins: { type: Number, default: 0 },
      losses: { type: Number, default: 0 },
      win_pct: { type: Number, default: 0 },
    },
    single_player: {
      total: { type: Number, default: 0 },
      wins: { type: Number, default: 0 },
      losses: { type: Number, default: 0 },
      win_pct: { type: Number, default: 0 },
    },
  },
  playing_now: {
    status: { type: Boolean, default: false },
    game_id: { type: mongoose.Types.ObjectId },
    multi_player: { type: Boolean, default: true },
  },
  friends: {
    connected: [{ type: mongoose.Types.ObjectId, path: "user" }],
    disconnected: [{ type: mongoose.Types.ObjectId, path: "user" }],
  },
  friend_requests: {
    users: [{ type: mongoose.Types.ObjectId, path: "user" }],
    creator: { type: Boolean, default: false },
  },
  admin: {
    flag: { type: Boolean, default: false },
    key: { type: String },
  },
  facebook: { type: Boolean, default: false },
  google: { type: Boolean, default: false },
  game_requests: [
    {
      gameId: { type: mongoose.Types.ObjectId, path: "multiplayer game" },
      creator: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
