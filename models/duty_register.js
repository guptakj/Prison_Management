const mongoose = require('mongoose');

const DutyRegisterSchema = new mongoose.Schema({
    prisoner_id:Number,
    name:String,
    department_id:Number,
    department_name:String,
    shift:String
});

module.exports = mongoose.model("Duty_register", DutyRegisterSchema);