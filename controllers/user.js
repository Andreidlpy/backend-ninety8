


const usuariosGet = ( req, res ) => {
    req.session.usuario = 'Oscar'
    req.session.rol = 'Admin'
    req.session.visitas = req.session.visitas ? ++req.session.visitas : 1
    console.log(req.sessionID)
    res.json({
        "ok": 'ok',
        msg: req.session.visitas
    })
}
const usuariosDelete = ( req, res ) => {
    res.json({
        "ok": 'ok',
        msg: 'delete'
    })
}
const usuariosPost = ( req, res ) => {

    const { nombre, apellido } = req.body;

    res.json({
        nombre, apellido
    })
}
const usuariosUpdate = ( req, res ) => {
    res.json({
        "ok": 'ok',
        msg: 'update'
    })
}


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosUpdate,
}