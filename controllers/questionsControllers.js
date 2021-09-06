const Question = require("../models/Question");

const questionsControllers = {
  getQuestion: async (req, res) => {
    const { category } = req.body;
    try {
      await Question.count().exec(async (err, count) => {
        //.find({category})
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
