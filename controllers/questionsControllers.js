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
    try {
      Question.find({ category })
        .count()
        .exec(async (err, count) => {
          let random = Math.floor(Math.random() * count);
          let randomQuestion;
          do {
            randomQuestion = await Question.findOne({ category }).skip(random);
          } while (questions.some((qs) => qs.question === randomQuestion._id));
          res.json({ success: true, response: randomQuestion });
        });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};

module.exports = questionsControllers;
