const mongoose = require("mongoose");
const moneyShema = mongoose.Schema({
    Serverid: String,
    id: String,
    money: Number
});

module.exports = mongoose.model("money", moneyShema);