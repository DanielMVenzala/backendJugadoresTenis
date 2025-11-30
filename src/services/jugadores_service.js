

const Jugador = require("../models/jugador")

const getAllJugadores = async () => {
    return await Jugador.find()
};

module.exports = {
    getAllJugadores,
};