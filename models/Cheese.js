const mongoose = require("../db/connection");
const cheeseSchema = new mongoose.Schema({
    name: String,
    image: String,
    country: String,
});

const Cheese = mongoose.model("Cheese", cheeseSchema);

module.exports = Cheese;