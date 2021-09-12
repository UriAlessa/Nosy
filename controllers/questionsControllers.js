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
          let question;
          do {
            question = await Question.findOne({ category }).skip(random);
          } while (questions.some((qs) => qs.question === question._id));
          if (!question) throw new Error();
          res.json({ success: true, response: question });
        });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};

module.exports = questionsControllers;
