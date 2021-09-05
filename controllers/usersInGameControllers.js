const User = require("../models/User");

const usersInGameControllers = {
  answerCorrectly: async (req, res) => {
    try {
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  useRepeatAnswer: async (req, res) => {
    try {
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  useBomb: async (req, res) => {
    try {
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  useReRoll: async (req, res) => {
    try {
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};

module.exports = usersInGameControllers;
