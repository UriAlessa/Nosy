const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    status: Boolean,
    user: { type: mongoose.Types.ObjectId, path: "user" },
    lifes: Number,
    questions: [{
        total: { type: mongoose.Types.ObjectId, path: "question" },
        correct: { type: mongoose.Types.ObjectId, path: "user" },
        incorrect: { type: mongoose.Types.ObjectId, path: "user" },
    }],
    medals: [],
    nosys: Number,
    power_used: Number,
    coin_spent: Number,

});

module.exports = mongoose.model("game", gameSchema);


