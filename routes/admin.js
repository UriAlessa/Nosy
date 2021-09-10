const express = require("express");
const adminGameControllers = require("../controllers/adminControllers/adminGameControllers");
const router = express.Router();
const passport = require("passport");
const adminQuestionsControllers = require("../controllers/adminControllers/adminQuestionsControllers");
const adminUsersControllers = require("../controllers/adminControllers/adminUsersControllers");

//ADMIN QUESTION ROUTES
router
  .route("/questions/micaupdate")
  .put(adminQuestionsControllers.micaController);
router
  .route("/questions")
  .post(adminQuestionsControllers.restoreAllQuestions)
  .get(adminQuestionsControllers.readAllQuestions)
  .put(adminQuestionsControllers.updateApprovedQuestions)
  .delete(adminQuestionsControllers.deleteNotApprovedQuestions);

router
  .route("/questions/category/:category")
  .get(adminQuestionsControllers.readQuestionsPerCategory);

router
  .route("/questions/difficulty/:difficulty")
  .get(adminQuestionsControllers.readQuestionsPerDifficulty);

router
  .route("/question/:id")
  .post(adminQuestionsControllers.createQuestion)
  .get(adminQuestionsControllers.readQuestion)
  .put(adminQuestionsControllers.updateQuestion)
  .delete(adminQuestionsControllers.deleteQuestion);

//ADMIN USER ROUTES
router
  .route("/user")
  .post(passport.authenticate("jwt", { session: false }), adminUsersControllers.createAdminUser)
  .get(adminUsersControllers.getUsers)
  .put(adminUsersControllers.updateUser)
  .delete(passport.authenticate("jwt", { session: false }), adminUsersControllers.deleteUser);

//ADMIN GAME CONTROLLERS
router.route("/game").get(adminGameControllers.getGames);
module.exports = router;
