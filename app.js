const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3000

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


//設定引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    User.find()
        .lean()
        .then(users => res.render('login', { users }))
        .catch((error) => console.log(error))
})

app.listen(PORT, () => console.log(`Express is running on http://localhost:${PORT}`))