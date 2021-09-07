const express = require("express");
const router = express.Router();
// const validator = require("../controllers/validator");
const questionsControllers = require("../controllers/questionsControllers");
const usersAccountsControllers = require("../controllers/usersAccountControllers");
const gameControllers = require("../controllers/gameControllers");
const passport = require("passport");
const validator = require('../controllers/validator')

router.route("/user/signup").post(usersAccountsControllers.signUp);
router.route("/user/login").post(usersAccountsControllers.logIn);

router
  .route("/user/token")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.verifyToken
  );

router.route("/question/:category")
  .get(questionsControllers.getQuestion);

router
  .route("/game/newgame")
  .post(
    passport.authenticate("jwt", { session: false }),
    gameControllers.newGame
  )
  .put(
    passport.authenticate("jwt", { session: false }),
    gameControllers.acceptGameRequest
  );

module.exports = router;
