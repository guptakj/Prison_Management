const mongoose = require('mongoose');

const CriminalSchema = new mongoose.Schema({
    name:String,
    crime:String
});

module.exports = mongoose.model("Criminals", CriminalSchema);