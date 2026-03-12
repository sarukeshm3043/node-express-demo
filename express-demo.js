const express = require('express')
const app = express()
const port = 3000

app.get('/name', (req, res) => {
  res.send('Sarukesh')
})

app.get('/id', (req, res) => {
  res.send('721423243043')
})

app.get('/red', (req, res) => {
  res.send('<html><body><h1 style="color:red;">RED COLOR</h1></body></html>')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
