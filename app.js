const express = require('express');
const Movie = require("./models/Movie.model")

const hbs = require('hbs');
const path = require('path');


require('dotenv').config();


require('./configs/database.config');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

// URL params
app.get('/movies', (req, res) => {
  //// /store/clothes/spring/tshirt

  console.log('---------------------------------');
  console.log('The URL params are:', req.params);
  console.log('The value for the param "season" is: ', req.params.season);
  console.log(
    'The value for the param "singleClothing" is',
    req.params.singleClothing
  );
  console.log('---------------------------------');

  // send "params" to the details-page.hbs
  res.render('details-page', req.params);
});

// Query strings form results
app.get('/store/search', (req, res) => {
  const titleSearch = req.query.title;

  Movie.find({ title: { $regex: titleSearch, $options: "i" } })
  .then((response)=> {
  console.log(">>>>>", titleSearch, response)
  res.render("results-page", {movies:response});
}
  );

});


// Query strings form results
/*app.get('/store/search', (req, res) => {
  const DirectorSearch = req.query.Director;

  Movie.find({ Director: { $regex: DirectorSearch, $options: "i" } })
  .then((response)=> {
  console.log(">>>>>", DirectorSearch, response)
  res.render("results-page", {movies:response});
}
  );

});*/

const router = express.Router()

router.get('/store/search', (req, res) =>{
  res.render("title")
  res.render("director")
  res.render("rate")
  })

  module.exports = router

// Shop index page
app.get('/', (req, res) => {
  res.render('shop-page');
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));