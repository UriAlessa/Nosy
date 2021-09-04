const Question = require('../models/Question')

const questionsControllers = {
    getQuestion: async (req, res) => {
        const { category, difficulty } = req.body
        try {
            await Question.count().exec(async (err, count) => {
                let random = Math.floor(Math.random() * count)
                let question = await Question.findOne({ category, difficulty }).skip(random)
                if (!question) throw new Error()
                res.json({ success: true, response: question })
            })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    readAllQuestions: async (req, res) => {
        try {
            let questions = await Question.find()
            if (!questions) throw new Error()
            res.json({ success: true, response: questions })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },

    createQuestion: async (req, res) => {
        const { category, question, questionImage, possibleAnswers, correctAnswer, difficulty } = req.body
        try {
            let newQuestion = new Question({
                category, question, questionImage, possibleAnswers, correctAnswer, difficulty
            })
            await newQuestion.save()
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })

        }
    },
    readQuestion: async (req, res) => {
        try {
            let question = await Question.findOne({ _id: req.params.id })
            if (!question) throw new Error()
            res.json({ success: true, response: question })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    updateQuestion: async (req, res) => {
        try {
            let modified = await Question.findOneAndUpdate(
                { _id: req.params.id },
                { ...req.body },
                { new: true }
            )
            res.json({ success: false, modified })

        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    deleteQuestion: async (req, res) => {
        try {
            await Question.findOneAndDelete({ _id: req.params.id })
            res.json({ success: true })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },

    readQuestionsPerCategory: async (req, res) => {
        try {
            let questions = await Question.find({ category: req.params.category })
            if (!questions) throw new Error()
            res.json({ success: true, response: questions })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },
    readQuestionsPerDifficulty: async (req, res) => {
        try {
            let questions = await Question.find({ difficulty: req.params.difficulty })
            if (!questions) throw new Error()
            res.json({ success: true, response: questions })
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    }
}

module.exports = questionsControllers