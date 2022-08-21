const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3000
const bodyParser = require('body-parser')
const User = require('./models/user')

//mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', () => {
    console.log('mongoose error!')
})
db.once('open', () => {
    console.log('mongoose connected!')
})

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
//設定引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    return res.render('login')
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    User.findOne({ email, password })
        .lean()
        .then(user => {
            user ? res.render('welcome', { Name: user.firstName }) : res.render('login', { wrong: true })
        })
        .catch((err) => console.error(err))
})

app.listen(PORT, () => console.log(`Express is running on http://localhost:${PORT}`))