const Question = require("../models/Question");

const questionsControllers = {
  getQuestion: async (req, res) => {
    const { category, game } = req.params;
    let questions;
    if (game.current_player) {
      questions =
        game.current_player._id === game.player1.user._id
          ? game.player1.questions
          : game.player2.questions;
    } else {
      questions = game.player.questions;
    }
    questions = questions.map((qs) => qs.question);
    try {
      let allQuestoins = await Question.find({ category });
      let randomQuestion;
      do {
        randomQuestion = allQuestoins.find(
          (qs, ind, arr) => arr[Math.random() * allQuestoins.length]
        );
      } while (questions.some((qs) => qs === randomQuestion._id));
      res.json({ success: true, response: randomQuestion });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};

module.exports = questionsControllers;
