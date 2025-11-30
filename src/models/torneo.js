const mongoose = require("mongoose");

// Sub-esquema jugador dentro de partido
const jugadorSchema = new mongoose.Schema({
    jugador_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    foto: {
        type: String,
        required: true
    }
}, { _id: false });

// Sub-esquema partido dentro de ronda
const partidoSchema = new mongoose.Schema({
    jugadores: {
        type: [jugadorSchema], 
        required: true
    }
}, { _id: false });

// Sub-esquema de ronda dentro de torneo
const rondaSchema = new mongoose.Schema({
    nombre_ronda: {
        type: String,
        required: true
    },
    partidos: {
        type: [partidoSchema],
        required: true
    }
}, { _id: false });

// Esquema principal Torneo
const torneoSchema = new mongoose.Schema({
    nombre_torneo: {
        type: String,
        required: true
    },
    rondas: {
        type: [rondaSchema],
        required: true
    }
}, { collection: "torneos" });

module.exports = mongoose.model("Torneo", torneoSchema);
