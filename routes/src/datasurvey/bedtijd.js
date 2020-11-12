const express = require('express');
const router = express.Router();
const moment = require('moment');
const getData = require('../../../helper/dataset');

router.get('/bedtijd', (req, res) => {
  const bedtijden = getData('bedtijd')
      .map((convertime) => {
        return moment(`${convertime}`, ['h:mm A']).format('HH:mm');
      });
  return res.json(bedtijden);
});

module.exports = router;
