const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Item = require('./models/Item')

const app = express()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fun', {
  useMongoClient: true
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/fetch', (req, res) => {
  Item.find({}, (err, items) => {
    res.send({ success: true, items })
  })
})

app.post('/add', (req, res) => {
  const { item } = req.body
  const newItem = new Item({ item })

  newItem.save(err => {
    res.send({ success: true, item: newItem.item })
  })
})

const port = process.env.PORT || 3030
app.listen(port, () => {
  console.log('Express server running on port', port)
})
