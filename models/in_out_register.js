const mongoose = require('mongoose');

const InOutRegisterSchema = new mongoose.Schema({
    Visitor_type:String,
    visitor_id:Number,
    visitor_name:String,
    date_in: Date,
    date_out: Date,
    time_in:String,
    time_out:String,
    place:{type:String,default:"Prison"}
});

module.exports = mongoose.model("In_Out_register", InOutRegisterSchema);