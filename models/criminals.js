const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CriminalSchema = new mongoose.Schema({
    prisoner_id:Number,
    name:{type :String },
    crime_details:String,
    age:{type:Number,default :0},
    address: String,
    gender: String,
    nationality: String,
    occupation: String,
    photo :String,
    article_submitted: {type:Array},
    officer_in_charge:String,
    details : {type : Schema.Types.ObjectId , ref :"Details"}
});

module.exports = mongoose.model("Criminals", CriminalSchema);