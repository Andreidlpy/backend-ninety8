const { Router } = require('express');

const { checkoutPost, successCheckout, pendingCheckout, failureCheckout, webhookNotification } = require('../controllers/checkout');

const router = Router()



router.post('/', checkoutPost )
router.get('/success', successCheckout )
router.get('/pending', pendingCheckout )
router.get('/failure', failureCheckout )
router.post('/webhooks/notifications', webhookNotification )

module.exports = router;