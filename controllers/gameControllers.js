const SinglePlayer = require("../models/Game").singlePlayer;
const MultiPlayer = require("../models/Game").multiPlayer;
const User = require("../models/User");

const gameControllers = {
  newGame: async (req, res) => {
    let game;
    try {
      if (req.body.username) {
        game = new MultiPlayer({
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
        game = new SinglePlayer({
          player: { user: req.user._id },
        });
        await game.save();
        await User.findOneAndUpdate(
          { _id: req.user._id },
          {
            $set: {
              playing_now: {
                status: true,
                game_id: game._id,
                multi_player: false,
              },
            },
          },
          { new: true }
        );
      }
      res.json({ success: true, response: { game, coins: req.user.coins } });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  acceptGameRequest: async (req, res) => {
    try {
      await User.updateMany(
        { "game_requests.gameId": req.body.gameId },
        {
          $pull: { game_requests: { gameId: req.body.gameId } },
        }
      );
      if (req.body.accept) {
        let game = await MultiPlayer.findOneAndUpdate(
          { _id: req.body.gameId },
          { player2: { user: req.user._id }, status: true },
          { new: true }
        );
        await User.updateMany(
          { "game_requests.gameId": req.body.gameId },
          {
            $pull: { game_requests: { gameId: req.body.gameId } },
            playing_now: { status: true, game_id: game._id },
          }
        );
        res.json({ success: true, response: game });
      } else {
        await MultiPlayer.findOneAndDelete({ _id: req.body.gameId });
        throw new Error("Declined");
      }
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  getCurrentGame: async (req, res) => {
    try {
      res.json({
        success: true,
        response: { game: req.user.playing_now.game_id, coins: req.user.coins },
      });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  answer: async (req, res) => {
    const { question, answer, nosy, powers_used, coins_spent } = req.body;
    const { _id, playing_now } = req.user;
    const { game_id, multi_player } = playing_now;
    try {
      if (multi_player) {
      } else {
        if (nosy && answer) {
          await SinglePlayer.findOneAndUpdate(
            { _id: game_id._id },
            {
              $push: { "player.medals": question.category },
            },
            { new: true }
          );
        }
        const thisquestion = { question: question._id, answer: answer };
        let nosys = nosy ? 1 : 0;
        let lifes = answer ? 0 : -1;
        let newGameState = await SinglePlayer.findOneAndUpdate(
          { _id: game_id },
          {
            $push: { "player.questions": thisquestion },
            $inc: {
              lifes: lifes,
              "player.coins_spent": coins_spent,
              "player.powers_used": powers_used,
              "player.nosys": nosys,
            },
          },
          { new: true }
        );
        let coins = answer ? 5 : 0;
        coins -= coins_spent;
        let newUserState = await User.findOneAndUpdate(
          { _id },
          { $inc: { coins: coins } },
          { new: true }
        );
        if (newGameState.player.medals.length === 5) {
          newGameState = await SinglePlayer.findOneAndUpdate(
            { _id: game_id._id },
            { $set: { status: false } },
            { new: true }
          );
          const { total, wins } = newUserState.statistics.single_player;
          const win_pct = ((wins + 1) / (total + 1)) * 100;
          newUserState = await User.findOneAndUpdate(
            { _id: req.user._id },
            {
              $inc: {
                "statistics.single_player.total": 1,
                "statistics.single_player.wins": 1,
              },
              $set: {
                "statistics.single_player.win_pct": win_pct,
                "playing_now.status": false,
                "playing_now.game_id": null,
                "playing_now.multi_player": true,
              },
            },
            { new: true }
          );
        }
        if (newGameState.lifes === 0) {
          newGameState = await SinglePlayer.findOneAndUpdate(
            { _id: game_id._id },
            { $set: { status: false } },
            { new: true }
          );
          const { total, wins } = newUserState.statistics.single_player;
          const win_pct = (wins / (total + 1)) * 100;
          newUserState = await User.findOneAndUpdate(
            { _id: req.user._id },
            {
              $inc: {
                "statistics.single_player.total": 1,
                "statistics.single_player.losses": 1,
              },
              $set: {
                "statistics.single_player.win_pct": win_pct,
                "playing_now.status": false,
                "playing_now.game_id": null,
                "playing_now.multi_player": true,
              },
            },
            { new: true }
          );
        }
        res.json({ success: true, response: { newGameState, newUserState } });
      }
    } catch (error) {
      res.json({ success: false });
    }
  },
};

module.exports = gameControllers;
