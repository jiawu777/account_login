const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('hello Jia 123!')
})

app.listen(PORT, () => console.log(`Express is running on http://localhost:${PORT}`))