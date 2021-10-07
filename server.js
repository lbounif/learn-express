const express = require('express')
const path = require("path")

const app = express()

const date = new Date()
console.log(`Hour is: ${date.getHours()}`)

const publicDirectoryPath = path.join(__dirname, './public')

date.getHours() < 8 || date.getHours() > 17 
? app.get("/index.html", (req, res) => {
    res.send("This is not working time go have some fun !")
})
: app.use(express.static(publicDirectoryPath)) // -> localhost:3000/index.html

// app.use(express.static(__dirname)) -> localhost:3000/public/index.html

const port = 4000

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})