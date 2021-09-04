const express = require("express");
const router = express.Router();
const questionsControllers = require("../controllers/questionsControllers");
// const usersControllers = require("../controllers/usersControllers");
const passport = require("passport");
const validator = require("../controllers/validator");

// router.route('/user')
// .put()
// .put()

router.route('/question')
    .get(questionsControllers.getQuestion)
