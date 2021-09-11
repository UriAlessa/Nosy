const User = require("../models/User");

const socketControllers = {
  gameRequest: (req, res) => {
    try {
    } catch (err) {
      res.json({ success: false, response: err.message });
    }
  },
  startGame: (req, res) => {
    try {
    } catch (err) {
      res.json({ success: false, response: err.message });
    }
  },
  changeCurrentPlayer: (req, res) => {
    try {
    } catch (err) {
      res.json({ success: false, response: err.message });
    }
  },
  friendRequest: (req, res) => {
    try {
    } catch (err) {
      res.json({ success: false, response: err.message });
    }
  },
  friends: (req, res) => {
    try {
    } catch (err) {
      res.json({ success: false, response: err.message });
    }
  },
};
module.exports = socketControllers;
