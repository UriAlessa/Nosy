const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, path: "user" },
  // cambiar por un array de objetos pregunta: id, correct: true/false
  questions: [
    {
      question: { type: mongoose.Types.ObjectId, path: "question" },
      answer: Boolean,
    },
  ],
  medals: [String],
  nosys: { type: Number, default: 0 },
  powers_used: { type: Number, default: 0 },
  coins_spent: { type: Number, default: 0 },
});

const MultiPlayerGame = mongoose.Schema({
  status: { type: Boolean, default: false },
  player1: playerSchema,
  player2: playerSchema,
  current_player: { type: mongoose.Types.ObjectId, path: "user" },
});

const SinglePlayerGame = mongoose.Schema({
  status: { type: Boolean, default: true },
  player: playerSchema,
  lifes: { type: Number, default: 5 },
});

module.exports = {
  singlePlayer: mongoose.model("singleplayer game", SinglePlayerGame),
  multiPlayer: mongoose.model("multiplayer game", MultiPlayerGame),
};
