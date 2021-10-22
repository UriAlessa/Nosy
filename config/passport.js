const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");

module.exports = passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETORKEY,
    },
    (payload, done) => {
      User.findOne({ _id: payload._doc._id })
        .populate({
          path: "friends",
          model: "user",
          select: "username avatar connected",
        })
        .populate({
          path: "friend_requests",
          populate: {
            path: "user",
            model: "user",
            select: "username avatar",
          },
        })
        .populate({
          path: "game_requests",
          populate: {
            path: "user",
            model: "user",
            select: "username avatar",
          },
        })
        .populate({
          path: "playing_now",
          populate: { path: "game_id", model: "singleplayer game" },
        })
        .then((response) => {
          if (!response) {
            return done(null, false)
          }
          return done(null, response)
        })
        .catch((err) => done(err, false))
    }
  )
);
