const mongoose = require('mongoose');

const CaseRegisterSchema = new mongoose.Schema({
    prisoner_id:Number,
    name:String,
    sentence_duration: String,
    conviction_details : {type:Array}
});

module.exports = mongoose.model("Case_register", CaseRegisterSchema);