const { Router } = require('express')
// const { validarCampos, validarJWT, esAdminRole, tieneRol } = require('../middlewares')


const { sessionsGet } = require('../controllers/session');
const { vefiredSession } = require('../middlewares/verifiedSession');


const router = Router()



router.get('/', vefiredSession , sessionsGet )



module.exports = router;