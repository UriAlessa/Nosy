const express = require("express");
const router = express.Router();
const questionsControllers = require("../controllers/questionsControllers");
const validator = require("../controllers/validator");
const usersAccountsControllers = require("../controllers/usersAccountControllers");
const gameControllers = require("../controllers/gameControllers")
// const passport = require("passport");

router.route("/user/signup")
  .post(validator, usersAccountsControllers.signUp);
router.route("/user/login")
  .post(usersAccountsControllers.logIn);

router
  .route("/user/token")
  .post(validator, usersAccountsControllers.verifyToken);

router.route("/question")
  .get(questionsControllers.getQuestion);

router.route("/game/newgame")
  .post(validator, gameControllers.newGame)
  .put(validator, gameControllers.acceptGameRequest)




module.exports = router;
