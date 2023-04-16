const { Router } = require('express')


const { productosGet, productosPut, productosPost, productosDelete, getProductoById } = require('../controllers/productos')


const router = Router()



router.get('/', productosGet )

router.get('/:slugifiedName' , getProductoById )


router.post('/',  productosPost)


router.put('/:id', productosPut )


router.delete('/:id', productosDelete)



module.exports = router;