const mongoose = require('mongoose');

const CriminalSchema = new mongoose.Schema({
    prisoner_id:Number,
    name:String,
    crime_details:String,
    age:{type:Number,default :0},
    address: String,
    gender: String,
    nationality: String,
    occupation: String,
    photo :String,
    article_submitted: {type:Array},
    officer_in_charge:String
});

module.exports = mongoose.model("Criminals", CriminalSchema);