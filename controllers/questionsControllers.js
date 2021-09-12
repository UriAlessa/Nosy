const Question = require("../models/Question");

const questionsControllers = {
  getQuestion: async (req, res) => {
    const { category } = req.params;
    const { game } = req.body;
    let questions;
    if (game.current_player) {
      questions =
        game.current_player._id === game.player1.user._id
          ? game.player1.questions
          : game.player2.questions;
    } else {
      questions = game.player.questions;
    }
    questions = questions.length > 0 && questions.map((qs) => qs.question);
    try {
      let allQuestions;
      if (questions) {
        allQuestions = await Question.find({ category }).find({
          _id: { $nin: questions },
        });
      } else {
        allQuestions = await Question.find({ category });
      }
      let randomQuestion =
        allQuestions[Math.floor(Math.random() * allQuestions.length)];
      res.json({ success: true, response: randomQuestion });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};

module.exports = questionsControllers;
