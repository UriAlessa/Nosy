const Question = require("../../models/Question");

const adminQuestionsControllers = {
  micaController: async (req, res) => {
    const { category, img } = req.body;
    await Question.deleteMany({ category }, { img }, { new: true });
    res.json({ success: true });
  },
  restoreAllQuestions: async (req, res) => {
    try {
      await Question.insertMany(req.body.questions, { ordered: true });
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  readAllQuestions: async (req, res) => {
    try {
      let questions = await Question.find()
      if (!questions) throw new Error();
      res.json({ success: true, response: questions });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  updateApprovedQuestions: async (req, res) => {
    try {
      let modified = await Question.updateMany(
        { status: false },
        { status: true },
        { new: true }
      );
      res.json({ success: true, modified });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  deleteNotApprovedQuestions: async (req, res) => {
    try {
      await Question.deleteMany({}); //req.body.notApproved
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  createQuestion: async (req, res) => {
    const { category, question, possibleAnswers, correctAnswer, id } = req.body;
    try {
      let newQuestion = new Question({
        category,
        question,
        possibleAnswers,
        correctAnswer,
        status: true,
        creator: id,
      });
      await newQuestion.save();
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },

  readQuestion: async (req, res) => {
    try {
      let question = await Question.findOne({ _id: req.params.id });
      if (!question) throw new Error();
      res.json({ success: true, response: question });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  updateQuestion: async (req, res) => {
    try {
      let modified = await Question.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
      );
      res.json({ success: false, modified });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  deleteQuestion: async (req, res) => {
    try {
      await Question.findOneAndDelete({ _id: req.params.id });
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },

  readQuestionsPerCategory: async (req, res) => {
    try {
      let questions = await Question.find({ category: req.params.category });
      if (!questions) throw new Error();
      res.json({ success: true, response: questions });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },

  readQuestionsPerDifficulty: async (req, res) => {
    try {
      let questions = await Question.find({
        difficulty: req.params.difficulty,
      });
      if (!questions) throw new Error();
      res.json({ success: true, response: questions });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};
module.exports = adminQuestionsControllers;
