const express = require('express');

const hbs = require('hbs');

require('dotenv').config();

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// URL params
app.get('/store/clothes/:season/:singleClothing', (req, res) => {
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
  res.render('results-page', req.query);
});

// Shop index page
app.get('/', (req, res) => {
  res.render('shop-page');
});

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
