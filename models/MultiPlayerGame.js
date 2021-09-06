const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, path: "user" },
  questions: {
    total: [{ type: mongoose.Types.ObjectId, path: "question" }],
    correct: [{ type: mongoose.Types.ObjectId, path: "question" }],
    incorrect: [{ type: mongoose.Types.ObjectId, path: "question" }],
  },
  medals: [String],
  nosys: Number,
  powers_used: Number,
  coins_spent: Number,
});

const MultiPlayerGame = mongoose.Schema({
  status: Boolean,
  player1: playerSchema,
  player2: playerSchema,
  current_player: { type: mongoose.Types.ObjectId, path: "user" },
});

module.exports = mongoose.model("multiplayer game", MultiPlayerGame);
