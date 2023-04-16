


const usuariosGet = ( req, res ) => {
    res.json({
        "ok": 'ok',
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