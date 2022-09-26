const express = require('express')
const app = express()
// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


app.listen(PORT, () => {
  console.log('listening on port', PORT)
})