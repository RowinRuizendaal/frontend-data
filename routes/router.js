const express = require('express');
const router = express.Router();


// Routes for datavisualisation cleanup
const bedtijd = require('./src/datasurvey/bedtijd');
const oogkleur = require('./src/datasurvey/oogkleur');
// end datavisualisation cleanup

// RWD routes
const betaalmethode = require('./src/RWD/betaal-mogelijkheden');
// Make routes

// Routes for datavisualisation cleanup
router.use('/', bedtijd);
router.use('/', oogkleur);
// end datavisualisation clean

// RWD routes
router.use('/', betaalmethode);


module.exports = router;
