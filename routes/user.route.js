const express = require('express')
const user = require('../controllers/user.controller')
const router = express.Router()

router.get('/home/:userId',user.home)
router.get('/community/:userId',user.community)
router.get('/shop/:userId',user.shop)

module.exports = router;