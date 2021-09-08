const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
      res.json({
        success: true,
        user: {
          username,
          avatar: user.avatar,
        },
        token,
      });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },

  addFriend: async (req, res) => {},

  verifyToken: async (req, res) => {
    res.json({
      success: true,
      user: {
        username: req.user.username,
        avatar: req.user.avatar,
      },
    });
  },
};

module.exports = usersAccountControllers;
