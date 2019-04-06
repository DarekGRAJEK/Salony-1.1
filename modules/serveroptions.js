const mongoose = require("mongoose");
const xpShema = mongoose.Schema({
    Serverid: String,
    annChannel: String,
    botlog: String,
    inserver: String,
    outserver: String,
    report: String
});

module.exports = mongoose.model("serverOptions", xpShema);