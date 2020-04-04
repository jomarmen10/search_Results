const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
    title: String,
    year: Number,
    genre: [String],
    img: String,
    rating: [String],
    category: String,
});

const Services = mongoose.model("Movies", MovieSchema);

module.exports = Services;
