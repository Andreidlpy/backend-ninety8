const { usuariosGet, usuariosDelete, usuariosUpdate, usuariosPost } = require("../controllers/user")

const { Router } = require('express')
const router = Router();

router.get('/', usuariosGet)
router.post('/', usuariosPost)
router.put('/', usuariosUpdate)
router.delete('/', usuariosDelete)

module.exports = router