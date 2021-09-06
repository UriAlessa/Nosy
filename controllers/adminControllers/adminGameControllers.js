// const SinglePlayer = require("../models/Game").singlePlayer;
const MultiPlayer = require("../../models/Game").multiPlayer;
// const User = require("../models/User");

const adminGameControllers = {
  getGames: async (req, res) => {
    const { inCourse } = req.body;
    const { key } = req.headers;
    try {
      if (key !== process.env.SECRETORKEY) throw new Error("key error");
      let games;
      if (inCourse) {
        games = await MultiPlayer.find({ status: true });
      } else {
        games = await MultiPlayer.find();
      }
      res.json({ success: true, games });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};

module.exports = adminGameControllers;
