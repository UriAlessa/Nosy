const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const AdminUsersControllers = {
  createAdminUser: async (req, res) => {
    const { username, password, email, avatar } = req.body;
    const pw = bcrypt.hashSync(password);
    const { key } = req.headers;
    try {
      if (key !== process.env.SECRETORKEY) throw new Error("key error");
      const newUser = new User({
        username,
        password: pw,
        email,
        avatar,
        coins: 9999999,
        admin: true,
      });
      await newUser.save();
      res.json({
        success: true,
      });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  getUsers: async (req, res) => {
    const { key } = req.headers;
    try {
      if (key !== process.env.SECRETORKEY) throw new Error("key error");
      let users = await User.find();
      res.json({ success: true, response: users });
    } catch (error) {
      console.log(error)
      res.json({ success: false, error: error.message });
    }
  },
  updateUser: async (req, res) => {
    const { key } = req.headers;
    try {
      if (key !== process.env.SECRETORKEY) throw new Error("key error");
      let user = await User.findOneAndUpdate(
        { _id: req.body.id },
        { ...req.body },
        { new: true }
      );
      res.json({ success: true, modified: user });
    } catch (err) {
      res.json({ success: false, error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    const { key } = req.headers;
    try {
      if (key !== process.env.SECRETORKEY) throw new Error("key error");
      await User.findOneAndDelete({ _id: req.body.id });
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};

module.exports = AdminUsersControllers;
