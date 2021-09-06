const SinglePlayer = require("../models/Game").singlePlayer;
const MultiPlayer = require("../models/Game").multiPlayer;
const User = require("../models/User");

const gameControllers = {
  newGame: async (req, res) => {
    try {
      if (req.body.multiPlayer) {
        let game = new MultiPlayer({
          player1: { user: req.user._id },
          current_player: req.user._id,
        });
        await game.save();
        await User.findOneAndUpdate(
          { username: req.body.username },
          { $push: { game_requests: { creator: false, gameId: game._id } } }
        );
        await User.findOneAndUpdate(
          { username: req.user.username },
          { $push: { game_requests: { creator: true, gameId: game._id } } }
        );
      } else {
        let game = new SinglePlayer({
          player: { user: req.user._id },
        });
        await game.save();
        await User.findOneAndUpdate(
          { _id: req.user._id },
          { playing_now: { status: true, game_id: game._id } },
          { new: true }
        );
      }
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  acceptGameRequest: async (req, res) => {
    try {
      if (req.body.accept) {
        let game = await MultiPlayer.findOneAndUpdate(
          { _id: req.body.gameId },
          { player2: { user: req.user._id }, status: true },
          { new: true }
        );
        console.log(await User.find({ "game_requests.gameId": req.body.gameId }))
        await User.updateMany(
          { "game_requests.gameId": req.body.gameId },
          {
            $pull: { game_requests: { gameId: req.body.gameId } },
            playing_now: { status: true, game_id: game._id }
          }
        )
        res.json({ success: true, response: game });
      } else {
        await MultiPlayer.findOneAndDelete({ _id: req.body.gameId });
        console.log(await User.find({ "game_requests.gameId": req.body.gameId }))
        await User.updateMany(
          { "game_requests.gameId": req.body.gameId },
          {
            $pull: { game_requests: { gameId: req.body.gameId } }
          }
        )
        throw new Error("Declined");
      }
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
};

module.exports = gameControllers;
