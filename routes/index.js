const express = require("express");
const router = express.Router();
const questionsControllers = require("../controllers/questionsControllers");
const usersAccountsControllers = require("../controllers/usersAccountControllers");
const gameControllers = require("../controllers/gameControllers");
const passport = require("passport");
const validator = require("../controllers/validator");
const mailControllers = require("../controllers/mailControllers");
const socketControllers = require("../controllers/socketControllers");

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
  .post(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.addFriend
  )
  .put(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.acceptFriendRequest
  );

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
  .get(usersAccountsControllers.getReviews);

router
  .route("/user/emoji")
  .put(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.setEmoji
  );

router
  .route("/user/add_friend")
  .post(
    passport.authenticate("jwt", { session: false }),
    usersAccountsControllers.searchUsers
  );
router
  .route("/socket/game_request")
  .put(
    passport.authenticate("jwt", { session: false }),
    socketControllers.gameRequest
  );
router
  .route("/socket/start_game")
  .put(
    passport.authenticate("jwt", { session: false }),
    socketControllers.startGame
  );
router
  .route("/socket/change_current_player")
  .put(
    passport.authenticate("jwt", { session: false }),
    socketControllers.changeCurrentPlayer
  );
router
  .route("/socket/friend_requests")
  .put(
    passport.authenticate("jwt", { session: false }),
    socketControllers.friendRequest
  );
router
  .route("/socket/friends")
  .put(
    passport.authenticate("jwt", { session: false }),
    socketControllers.friends
  );
module.exports = router;
