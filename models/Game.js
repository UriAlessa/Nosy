const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    // game
    // updateUser = [irá cambiando el id del jugador actual]
    // results 
    // finished
    // jugadores, ganador, array de id de preguntas,

});

module.exports = mongoose.model("game", gameSchema);


