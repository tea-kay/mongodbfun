const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fun', {
  useMongoClient: true
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Express server running on port', port)
})
