const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3000
const bodyParser = require('body-parser')
const User = require('./models/user')
const routes = require('./routes')
require('./config/mongoose')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
//設定引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(routes)

app.listen(PORT, () => console.log(`Express is running on http://localhost:${PORT}`))