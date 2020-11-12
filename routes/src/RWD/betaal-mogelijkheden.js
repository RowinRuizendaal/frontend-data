const express = require('express');
const router = express.Router();
const datasetHelper = require('../../../helper/dataset');
const dataHelper = require('../../../utils/dataHelper');
const dataset1 = require('../../../dataset/RWD/r3rs-ibz5.json'); // Local file for testing purpose
const dataset2 = require('../../../dataset/RWD/534e-5vdg.json'); // Local file for testing purpose
const dataset3 = require('../../../dataset/RWD/t5pc-eb34.json'); // Local file for testing purpose

/**
 * Datasets needed
 * https://data.overheid.nl/dataset/11389-open-data-parkeren--betaalmethode-gebied
 * https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg (?)
 * https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
 * */


router.get('/betaalmethode', async (req, res) => {
  // Get areaManagerId & areadId & paymentMethod
  const paymentMethod = datasetHelper.getColumns(dataset1, ['areamanagerid', 'areaid', 'paymentmethod']);

  // get prices per areaManagerId
  const prices = datasetHelper.getColumns(dataset2, ['areamanagerid', 'amountfarepart', 'stepsizefarepart']);

  // convert price to price per hour
  const pricePerHour = dataHelper.pricePerHour(prices);
  // need to test this tomorrow -> output

  // Join pricePerHour and paymentMethod togeter
  const join1 = dataHelper.combineDataset(pricePerHour, paymentMethod, 'areamanagerid');

  // get cordinates latitude & longitude
  const coords = dataHelper.getCoords(dataset3);


  // join latitude/longitude with previous join
  const join2 = dataHelper.combineDataset(coords, join1, 'areamanagerid');

  // remove duplicate values
  const uniqueArray = dataHelper.duplicate(join2);

  // console.log(dataHelper.duplicate(join2, join2.areadesc));
  return res.json(uniqueArray);
});

module.exports = router;
