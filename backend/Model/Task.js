const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    value : String,
})

module.exports = mongoose.model('Tasks', taskSchema)