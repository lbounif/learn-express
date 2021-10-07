const express = require('express')

const app = express()

const myLogger = (req, res, next) => {
    console.log(`A new request received at ${Date.now()}`)
    next()
}
app.use(myLogger)

app.get('/', (req, res)=> {
    res.send('Hello world')
})

const port = 4000

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})