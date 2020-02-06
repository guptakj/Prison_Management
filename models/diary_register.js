const mongoose = require('mongoose');

const DiaryRegisterSchema = new mongoose.Schema({
    prisoner_id:Number,
    name:String,
    sentence_begin: Date,
    sentence_end: Date
});

module.exports = mongoose.model("Diary_register", DiaryRegisterSchema);