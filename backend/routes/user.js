const express = require('express')
const router = express.Router()

const {createAccount,loginAccount,getMe} = require('../controllers/User')
const {protect} = require('../middlewares/auth')


router.post('/login',loginAccount)
router.post('/register',createAccount)
router.get('/me',protect,getMe)




module.exports = router