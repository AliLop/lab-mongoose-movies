const express = require('express');
const Movie = require('../models/Movie.js');
//const Celebrity = require('../models/Celebrity.js')
const router  = express.Router();

//READ - LIST - INDEX
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((allMovies) => {
        res.render('movies/index', {movies: allMovies});
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`)
        next();
    })
});

//READ - SHOW DETAILS
router.get('/movies/:movieId', (req, res, next) => {
    let movieId = req.params.movieId
    Movie.findById(movieId)
    .populate('casting') // as per the Movie Model FIELD I want to populate
    .then((theOneMovie) => {
        console.log(theOneMovie)
        res.render('movies/show', {movie: theOneMovie});
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`)
        next();
    })
});

module.exports = router;