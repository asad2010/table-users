const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: {type: Number, min: 14},
    email: String, 
    password: String,
})

const Table = mongoose.model('table', schema)

module.exports = Table