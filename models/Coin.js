const moogose = require('mongoose'),
    Schema = moogose.Schema;

let Coin = new Schema({
    name: String,
    country: String,
    img: String,
    isAvailable: Number,
    value_us: Number,
    year: Number
});

module.exports = moogose.model('coin',Coin)
