const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = mongoose.model(
  "Movie",
  new Schema({
    title: { type: String },
    year: { type: String },
    director: { type: String },
    duration: { type: String },
    genre: [{ type: String }],
    rate: { type: Number },
  })
);

module.exports = Movie;
