const express = require("express");
const router = express.Router();
const questionsControllers = require("../controllers/questionsControllers");
const usersAccountsControllers = require("../controllers/usersAccountControllers");
const gameControllers = require("../controllers/gameControllers");
const passport = require("passport");
const validator = require("../controllers/validator");
const mailControllers = require("../controllers/mailControllers");

router.route("/user/signup").post(validator, usersAccountsControllers.signUp);
router.route("/user/login").post(usersAccountsControllers.logIn);
router
  .route("/user/logout")
  .put(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.logOut
  );
router
  .route("/user/friend_request")
  .post(usersAccountsControllers.addFriend)
  .put(usersAccountsControllers.acceptFriendRequest);

router
  .route("/user/token")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.verifyToken
  );

router.route("/question/:category").get(questionsControllers.getQuestion);

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

router
  .route("/game/answer")
  .put(
    passport.authenticate("jwt", { session: false }),
    gameControllers.answer
  );
router
  .route("/game/current_game")
  .get(
    passport.authenticate("jwt", { session: false }),
    gameControllers.getCurrentGame
  );

router.route("/mail").post(mailControllers.sendMail);

router
  .route("/review")
  .post(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.newReview
  )
  .get(
    usersAccountsControllers.getReviews
  )
  

router
  .route("/emoji")
  .put(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.setEmoji
  )
  .get(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.getEmoji
  )


module.exports = router;
