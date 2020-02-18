const mongoose = require('mongoose');

const policeSchema = new mongoose.Schema({
	police_user:String,
	police_pass:String
});

module.exports = mongoose.model("police", policeSchema);