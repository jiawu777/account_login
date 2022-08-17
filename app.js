const express = require('express')
const PORT = 3000
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('error', () => {
    console.log('mongoose error!')
})

db.once('open', () => {
    console.log('mongoose connected!')
})

app.get('/', (req, res) => {
    res.send('hello Jia 123!')
})

app.listen(PORT, () => console.log(`Express is running on http://localhost:${PORT}`))