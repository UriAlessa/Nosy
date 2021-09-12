const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Review = require("../models/Review");
const { use } = require("passport");
const { singlePlayer } = require("../models/Game");

const usersAccountControllers = {
  signUp: async (req, res) => {
    const { username, password, email, avatar, facebook, google } = req.body;
    const pw = bcrypt.hashSync(password);
    try {
      if (await User.findOne({ email: email })) {
        throw new Error("You're already signed up with that Google Account");
      }
      const newUser = new User({
        username,
        password: pw,
        email,
        avatar,
        google: google || false,
        facebook: facebook || false,
      });
      await newUser.save();
      const token = jwt.sign({ ...newUser }, process.env.SECRETORKEY);
      res.json({
        success: true,
        user: {
          username,
          avatar,
        },
        userData: newUser,
        token,
      });
    } catch (error) {
      error.message.includes("Google")
        ? res.json({ error: [{ message: error.message }] })
        : res.json({ success: false, error: error.message });
    }
  },
  logIn: async (req, res) => {
    const { username, password, facebook, google } = req.body;
    try {
      let user = await User.findOne({ username: username });
      if (!user) throw new Error("Username doesn't exists");
      if ((user.google && !google) || (user.facebook && !facebook)) {
        throw new Error("You must log in with Google");
      }
      let match = user && bcrypt.compareSync(password, user.password);
      if (!user || !match) throw new Error("Password does not match");
      const token = jwt.sign({ ...user }, process.env.SECRETORKEY);
      user = await User.findOneAndUpdate(
        { username: username },
        { $set: { connected: true } }
      );
      user = await User.findOne({ username: username })
        .populate({
          path: "friends",
          model: "user",
          select: "username avatar connected",
        })
        .populate({
          path: "friend_requests",
          populate: { path: "user", model: "user", select: "username avatar" },
        });
      res.json({
        success: true,
        user: {
          username,
          avatar: user.avatar,
        },
        userData: user,
        token,
      });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  logOut: async (req, res) => {
    const { _id, playing_now } = req.user;
    try {
      await User.findOneAndUpdate(
        { _id },
        {
          $set: {
            connected: false,
            "playing_now.status": false,
            "playing_now.game_id": null,
            "playing_now.multi_player": true,
          },
        }
      );
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false });
    }
  },
  addFriend: async (req, res) => {
    try {
      let userAdded = await User.findOne({ username: req.body.username });
      if (userAdded) {
        userAdded = await User.findOneAndUpdate(
          { username: req.body.username },
          {
            $push: { friend_requests: { user: req.user._id, creator: false } },
          },
          { new: true }
        )
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
          });
        let user = await User.findOneAndUpdate(
          { username: req.user.username },
          {
            $push: { friend_requests: { user: userAdded._id, creator: true } },
          },
          { new: true }
        )
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
          });
        res.json({
          success: true,
          friend_requests: {
            invitator: user.friend_requests,
            invitated: userAdded.friend_requests,
          },
        });
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  acceptFriendRequest: async (req, res) => {
    const { username, accept } = req.body;
    console.log(username);
    try {
      let user = await User.findOne({ username });
      let userNotAdded;
      let userAdded;
      if (accept) {
        userAdded = await User.findOneAndUpdate(
          { username: req.user.username },
          {
            $pull: { friend_requests: { user: user._id } },
            $push: { friends: user._id },
          },
          { new: true }
        )
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
          });
        user = await User.findOneAndUpdate(
          { username: req.body.username },
          {
            $pull: { friend_requests: { user: req.user._id } },
            $push: { friends: req.user._id },
          },
          { new: true }
        )
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
          });
      } else {
        userNotAdded = await User.findOneAndUpdate(
          { _id: req.user._id },
          {
            $pull: { friend_requests: { user: user._id } },
          },
          { new: true }
        ).populate({
          path: "friend_requests",
          populate: {
            path: "user",
            model: "user",
            select: "username avatar",
          },
        });
      }
      const response = accept
        ? {
            success: true,
            friend_requests: {
              invitator: user.friend_requests,
              invitated: userAdded.friend_requests,
            },
            friends: {
              invitator: user.friends,
              invitated: userAdded.friends,
            },
          }
        : {
            success: true,
            friend_requests: {
              invitated: userNotAdded.friend_requests,
            },
          };
      console.log("holas");
      res.json(response);
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  getFriendsList: async (req, res) => {
    res.json({ success: true, friends_list: req.user.friends });
  },
  verifyToken: async (req, res) => {
    res.json({
      success: true,
      user: {
        username: req.user.username,
        avatar: req.user.avatar,
      },
      userData: req.user,
    });
  },

  newReview: async (req, res) => {
    let date = new Date();
    try {
      const reviewToPost = await new Review({
        img: req.body.img,
        userId: req.user._id,
        date,
        title: req.body.title,
        description: req.body.description,
      });
      await reviewToPost.save();
      res.json({ success: true, response: reviewToPost });
    } catch (err) {
      res.json({ success: false, response: "DB trouble" });
    }
  },

  getReviews: async (req, res) => {
    let expired = 2592000000;
    let dateNow = Date.now();
    try {
      let reviews = await Review.find().populate({
        path: "userId",
        model: "user",
        select: "username avatar",
      });
      res.json({
        success: true,
        response: reviews.filter((review) => dateNow - review.date < expired),
      });
    } catch (error) {
      res.json({ succes: false, response: error.message });
    }
  },

  setEmoji: async (req, res) => {
    try {
      let user = await User.findOneAndUpdate(
        { _id: req.user._id },
        { $set: { emoji: req.body.emoji } },
        { new: true }
      );
      res.json({
        success: true,
        user: {
          username: user.username,
          avatar: user.avatar,
        },
        userData: user,
      });
    } catch (error) {
      res.json({ success: false });
    }
  },
  searchUsers: async (req, res) => {
    const { username } = req.body;
    try {
      let user = await User.findOne({ username });
      if (!user) {
        throw new Error("That username does not exist");
      }
      res.json({ success: true, response: user });
    } catch (error) {
      res.json({ success: false, response: error.message });
    }
  },
};

module.exports = usersAccountControllers;
