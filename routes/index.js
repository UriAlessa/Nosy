const express = require("express");
const router = express.Router();
const questionsControllers = require("../controllers/questionsControllers");
const usersAccountsControllers = require("../controllers/usersAccountControllers");
const validator = require("../controllers/validator");
// const passport = require("passport");

router.route("/user/signup").post(validator, usersAccountsControllers.signUp);
router.route("/user/login").post(usersAccountsControllers.logIn);
router
  .route("/user/token")
  .post(validator, usersAccountsControllers.verifyToken);

router.route("/question").get(questionsControllers.getQuestion);

module.exports = router;
