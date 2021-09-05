const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  category: { type: String, required: true },
  question: { type: String, required: true },
  questionImg: { type: String },
  possibleAnswers: {
    type: { type: Boolean, default: false },
    answers: [{ type: String, required: true }],
  },
  correctAnswer: { type: String, required: true },
  difficulty: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, path: "user" },
  status: { type: Boolean, default: false }
});

module.exports = mongoose.model("question", questionSchema);