var mongoose = require("mongoose");

var bountySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyAmount: Number,
    type: String,
    image: String
});

module.exports = mongoose.model("Bounty", bountySchema);