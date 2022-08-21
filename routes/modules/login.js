const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.post('/login', (req, res) => {
    const { email, password } = req.body
    User.findOne({ email, password })
        .lean()
        .then(user => {
            user ? res.render('welcome', { Name: user.firstName }) : res.render('login', { wrong: true })
        })
        .catch((err) => console.error(err))
})

module.exports = router