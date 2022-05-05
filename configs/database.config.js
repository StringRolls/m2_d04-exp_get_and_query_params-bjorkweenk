const mongoose = require('mongoose');
// CONNECT YOUR APP TO THE MONGODB
mongoose
  //                               the name of our database
  //                                   |
  .connect("mongodb+srv://stringrolls:OnhY5wQIEwoLejQS@cluster0.kmbwa.mongodb.net/movies?retryWrites=true&w=majority")
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

const Schema = mongoose.Schema;


