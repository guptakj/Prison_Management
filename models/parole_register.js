const mongoose = require('mongoose');

const ParoleRegisterSchema = new mongoose.Schema({
    prisoner_id:Number,
    name:String,
    address:String,
    reason:String,
    sentence : String,
    officer_in_charge:String
});

module.exports = mongoose.model("Parole_register",ParoleRegisterSchema);