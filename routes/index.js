const express = require('express')
const router = express.Router()
const User = require('../models/user')
const login = require('./modules/login')
router.get('/', (req, res) => {
    return res.render('login')
})

router.use(login)
module.exports = router
