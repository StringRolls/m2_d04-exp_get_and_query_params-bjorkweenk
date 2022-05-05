const mongoose = require("mongoose");
const movies = require("../movies.json");
mongoose
  .connect(
    "mongodb+srv://stringrolls:OnhY5wQIEwoLejQS@cluster0.kmbwa.mongodb.net/movies?retryWrites=true&w=majority"
  )
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

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

(async () => {
  try {
    await Movie.deleteMany();
    await Movie.insertMany(movies);
    const numMovies = await Movie.countDocuments();
    console.log(`You have loaded ${numMovies} movies`);
    mongoose.connection.close();
  } catch (err) {
    console.log("Error while getting the cats: ", err);
    mongoose.connection.close();
  }
})();
