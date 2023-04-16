const Visita = require("../models/visitas");

const sessionsGet = async (req, res) => {
    // Obtener o crear la visita
    const [visita, created] = await Visita.findOrCreate({
        where: {
        sessionId: req.session.id
        }
    });

    // Incrementar el contador de visitas
    visita.visitas++;
    await visita.save();
    // Incrementar la variable de sesión
    req.session.visitas = req.session.visitas ? req.session.visitas += 1 : 1;
    req.session.loggedin = true;

    res.json({
        ok: true,
        msg: `Número de visitas: ${req.session.visitas}`
    });
};

module.exports = {
    sessionsGet
}