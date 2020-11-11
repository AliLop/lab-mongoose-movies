const express = require('express');
const Celebrity = require('../models/Celebrity.js');
const router  = express.Router();

//READ - LIST - INDEX
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((allCeleb) => {
        res.render('celebrities/index', {celebrities: allCeleb});
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`)
        next();
    })
});

//CREATE NEW
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.post('/celebrities/new', (req, res, next) => {
    let {name, occupation, catchPhrase} = req.body; 
    console.log(req.body)
    Celebrity.create({
        name, 
        occupation,
        catchPhrase
    })
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch(() => {
        res.redirect('/celebrities/new')
    })
    
});

//READ - SHOW DETAILS
router.get('/celebrities/:celebId', (req, res, next) => {
    let celebId = req.params.celebId
    Celebrity.findById(celebId)
    .then((theOneCeleb) => {
        res.render('celebrities/show', {celebrity: theOneCeleb});
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`)
        next();
    })
});

//UPDATE EDIT
router.get('/celebrities/:celebId/edit', (req, res) => {
    let celebId = req.params.celebId;
    Celebrity.findById(celebId)
    .then((theOneCeleb) => {
        res.render('celebrities/edit', { celebrity: theOneCeleb});
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`)
        next();
    })
 })

// I am persisting the changes on the DB
 router.post('/celebrities/:celebId/edit', (req, res) => {
    let celebId = req.params.celebId
    let {name, occupation, catchPhrase} = req.body; 
    Celebrity.findByIdAndUpdate(celebId, {
      name,
      occupation,
      catchPhrase
    })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`)
      next();
    })
 });


router.post('/celebrities/:celebId/delete', (req, res) => {
    let celebId = req.params.celebId;

    Celebrity.findByIdAndRemove(celebId)
    .then(() => {   
      res.redirect('/celebrities');    
    })
    .catch((err) => {
      res.render('error',  {err});
      next();
    }); 
  });


module.exports = router;