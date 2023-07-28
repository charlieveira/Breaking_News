const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World my Friend')
})

app.listen(3000)