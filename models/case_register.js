const mongoose = require('mongoose');

const CaseRegisterSchema = new mongoose.Schema({
    prisoner_id:Number,
    name:String,
    sentence : String,
    conviction_details : {type:Array},
    officer_in_charge:String
});

module.exports = mongoose.model("Case_register", CaseRegisterSchema);