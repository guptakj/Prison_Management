const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
	data_user:String,
	data_pass:String
});

module.exports = mongoose.model("data", dataSchema);