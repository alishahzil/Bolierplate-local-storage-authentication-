const express = require('express')
const router = express.Router()

const {createAccount,loginAccount,getMe} = require('../controllers/User')
const { getallstock,purchase,purchasereturn,stockInvm,addstock } = require('../controllers/stock');
const {protect} = require('../middlewares/auth')


router.post('/login',loginAccount)
router.post('/register',createAccount)
router.get('/me',protect,getMe)
router.get('/getallstock',getallstock)
router.get('/stockInvm',stockInvm)
router.get('/purchase',purchase)
router.get('/purchasereturn',purchasereturn)
router.post('/addstock',addstock)




module.exports = router