const mongoose = require('mongoose');

const InterviewRequestRegisterSchema = new mongoose.Schema({
    prisoner_id:Number,
    visitor_name:String,
    name:String,
    relation_with_prisoner:String,
    duration:Number,
    time_start:Number,
    time_end:Number,
    visit_date:String
});

module.exports = mongoose.model("interview_request", InterviewRequestRegisterSchema);