const Question = require("../models/Question");

const questionsControllers = {
  getQuestion: async (req, res) => {
    const { category } = req.params;
    try {
      await Question.find({ category }).count().exec(async (err, count) => {
        let random = Math.floor(Math.random() * count);
        let question = await Question.findOne({ category }).skip(random);
        if (!question) throw new Error();
        res.json({ success: true, response: question });
      });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};

module.exports = questionsControllers;
