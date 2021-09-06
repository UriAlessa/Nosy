//crear data
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String, required: true },
  coins: { type: Number, default: 0 },
  statistics: {
    multi_player: {
      total: Number,
      wins: Number,
      losses: Number,
      win_pct: Number,
    },
    single_player: {
      total: Number,
      wins: Number,
      losses: Number,
      win_pct: Number,
    },
  },
  playing_now: {
    status: Boolean,
    multiplayer_game: Boolean,
    game_id: { type: mongoose.Types.ObjectId },
  },
  friends: [{ type: mongoose.Types.ObjectId, path: "user" }],
  friend_requests: [{ type: mongoose.Types.ObjectId, path: "user" }],
  admin: { type: Boolean, default: false },
  facebook: { type: Boolean, default: false },
  google: { type: Boolean, default: false },
  game_request: [{ type: mongoose.Types.ObjectId, path: "multiplayer game" }],
});

module.exports = mongoose.model("user", userSchema);
