const express = require("express");
const router = express.Router();
const jugadoresController = require("../controllers/jugadores_controller");

router.get("/", jugadoresController.getJugadores);

module.exports = router;
