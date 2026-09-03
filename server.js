const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Hello I am Ajay")
})

app.get("/about", (req, res) => {
    res.send("Welcome to my world")
})

app.listen(4000)
