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
        console.log("1");
        await User.findOneAndUpdate(
          { _id: req.user._id },
          {
            playing_now: {
              status: true,
              game_id: game._id,
              multi_player: false,
            },
          },
          { new: true }
        );
        console.log("2");
      }
      res.json({ success: true, response: game });
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
        console.log(
          await User.find({ "game_requests.gameId": req.body.gameId })
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
        console.log(
          await User.find({ "game_requests.gameId": req.body.gameId })
        );
        await User.updateMany(
          { "game_requests.gameId": req.body.gameId },
          {
            $pull: { game_requests: { gameId: req.body.gameId } },
          }
        );
        throw new Error("Declined");
      }
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  answer: async (req, res) => {
    let newGameState;
    console.log(req.body);
    const { question, answer, nosy, powers_used, coins_spent } = req.body;
    const { _id, playing_now } = req.user;
    const { game_id, multi_player } = playing_now;
    try {
      if (multi_player) {
      } else {
        let nosys = nosy ? 1 : 0;
        const thisgame = await SinglePlayer.findOne({
          _id: game_id,
        });
        const medal =
          thisgame.player.questions.filter((qs) => qs.answer).length % 3 === 0;
        console.log((medal || nosy) && answer);
        if ((medal || nosy) && answer) {
          newGameState = await SinglePlayer.findOneAndUpdate(
            { _id: game_id },
            {
              $push: { "player.medals": question.category },
            },
            { new: true }
          );
        }
        const thisquestion = { question: question._id, answer: answer };
        let lifes = answer ? 0 : -1;
        newGameState = await SinglePlayer.findOneAndUpdate(
          { _id: game_id },
          {
            $push: { "player.questions": thisquestion },
            $inc: { lifes: lifes }, //LAS LIFES NO ANDAN
            $inc: {
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
          { $inc: { coins } }
        );
        res.json({ success: true, response: { newGameState, newUserState } });
      }
    } catch (error) {
      res.json({ success: false });
    }
  },
  updateGame: async (req, res) => {
    try {
      SinglePlayer.findOneAndUpdate({ _id: req.body.id }, { ...req.body });
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false });
    }
  },
};

module.exports = gameControllers;
