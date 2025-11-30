//importamos la capa del servicio
const jugadoresService = require("../services/jugadores_service")

//Definimos todos los métodos
const getJugadores = async (req, res) => {

    try {

        const jugadores = await jugadoresService.getAllJugadores();


        res.status(200).json({
            status: "OK",
            data: jugadores,
        });
    } catch (error) {

        console.error("Error en el controlador al obtener jugadores:", error.message);
        res.status(500).json({
            status: "ERROR",
            message: "Fallo al obtener la lista de jugadores.",
            error: error.message
        });
    }
};

module.exports = {
    getJugadores,
};