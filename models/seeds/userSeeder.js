const users = [
    {
        firstName: 'Tony',
        email: 'tony@stark.com',
        password: 'iamironman'
    },
    {
        firstName: 'Steve',
        email: 'Steve',
        password: 'icandothisallday'
    },
    {
        firstName: 'Peter',
        email: 'peter@parker.com',
        password: 'enajyram'
    },
    {
        firstName: 'Natasha',
        email: 'natasha@gamil.com',
        password: '*parol#@$!'
    },
    {
        firstName: 'Nick',
        email: 'nick@shield.com',
        password: 'password'
    }
]

const mongoose = require('mongoose')
const User = require('../user')
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('error', () => {
    console.log('mongoose error!')
})
db.once('open', () => {
    console.log('mongoose connected!')
    User.create(users)
        .then(() => {
            console.log('User Seeder done!')
        })
        .catch(error => console.error(error))
})