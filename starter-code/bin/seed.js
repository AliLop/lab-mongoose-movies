const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');
const Movie = require('../models/Movie.js');
const DB_NAME = 'movies-project';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
/*
const celebrities = [
  {
    name: 'Will Smith',
    occupation: 'Actor',
    catchPhrase: 'Yes, I can'
  },
  {
    name: 'Ariana Grande',
    occupation: 'Singer',
    catchPhrase: 'Say it with Emojis'
  },
  {
    name: 'Oprah Winfrey',
    occupation: 'TV presenter',
    catchPhrase: 'Aha moment!'
  }
];

Celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));
  */

const movies = [
  {
    title: 'Wild wild West',
    genre: 'Action',
    plot: 'Lorem ipsum',
    casting: '5faacc6c49528534dcbd3e4a'
  },
  {
    title: 'Hairspray',
    genre: 'Musical',
    plot: 'Lorem ipsum',
    casting: '5faacc6c49528534dcbd3e4b'
  },
  {
    title: 'Oprah Winfrey',
    genre: 'TV presenter',
    plot: 'Aha moment!',
    casting: '5faacc6c49528534dcbd3e4c'
  }
];

Movie.create(movies)
  .then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} movies`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));