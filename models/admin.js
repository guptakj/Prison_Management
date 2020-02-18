const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
	admin_user:String,
	admin_pass:String
});

module.exports = mongoose.model("admin", adminSchema);