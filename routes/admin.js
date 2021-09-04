const express = require("express");
const router = express.Router();
const questionsControllers = require("../controllers/questionsControllers");

router.route('/questions')
    .get(questionsControllers.readAllQuestions)

router.route('/questions/category/:category')
    .get(questionsControllers.readQuestionsPerCategory)

router.route('/questions/difficulty/:difficulty')
    .get(questionsControllers.readQuestionsPerDifficulty)

router.route('/question/:id')
    .post(questionsControllers.createQuestion)
    .get(questionsControllers.readQuestion)
    .put(questionsControllers.updateQuestion)
    .delete(questionsControllers.deleteQuestion)


module.exports = router