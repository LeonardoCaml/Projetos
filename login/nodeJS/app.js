const express = require('express')
const app = express()

app.get('/', async(req, res) => {
    res.send('ola')
})

app.listen(300, () => {
    console.log('rodando')
})