const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
  item: String
}, { timestamps: true })

const ModelClass = mongoose.model('item', ItemSchema)
module.exports = ModelClass
