const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    username: { type: String, maxLength: 30, required: true, unique: true },
    timeCompleted: { type: Number, maxLength: 7, required:true },
    timePosted: { type: Date, default: Date.now, required: true },
})



module.exports = mongoose.model('Score', scoreSchema)