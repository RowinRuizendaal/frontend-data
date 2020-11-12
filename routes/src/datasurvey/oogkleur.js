const express = require('express');
const router = express.Router();
const getData = require('../../../helper/dataset');

router.get('/oogkleur', (req, res) => {
  const hexvalues = getData('oogKleur');

  const lookuptable = {
    'blauw': '#0000FF',
    'lichtblauw': '#ADD8E6',
    'bruin': '#A52A2A',
    'groen': '#83f52c',
    'rood': '#FF0000',
    'zwart': '#000000',
    'geel': '#FFFF00',
    'legergroen': '#4B5320',
    'staal': '#808080',
    'grijs': '#666666',
  };


  // https://github.com/Vuurvos1/functional-programming/blob/79e207836da26f8c7d9f264391db0ae1f25d9008/index.js#L35-L52
  // https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes/24390910
  // function to convert RGB value into HEX value
  const convertRGBtohex = (rgb) => {
    // remove unnecessary symbols
    let color = rgb.replace(/\./g, ',').replace(/[a-z\(\)]/g, '');
    // convert values to array
    color = color.split(',', 3);

    // make sure value is inside valid range
    color.map((el) => el = Math.min(255, Math.max(0, el)));

    // this has to be in a for loop for some reason
    for (let i = 0; i < color.length; i++) {
      color[i] = (+color[i]).toString(16).padStart(2, '0');
    }

    // create hex value
    color = `#${color.join('')}`;
    return color;
  };


  const convert = hexvalues
      .map((hexvalue) => {
        hexvalue = hexvalue
            .toLowerCase()
            .replace(/\s/g, ''); // s --> space //g --> replace globally

        if (hexvalue.match(/#[0-9A-Fa-f]{6}/g)) { // If color matches hex pattern
          return hexvalue;
        } else if (hexvalue in lookuptable) { // Lookup the color
          return lookuptable[hexvalue];
        } else if (hexvalue.includes('rgb')) {
          const rgbvalue = convertRGBtohex(hexvalue);
          return rgbvalue;
        } else {
          hexvalue = `#${hexvalue}`;
          if (hexvalue.match(/#[0-9A-Fa-f]{6}/g)) {
            return hexvalue;
          } else {
            return undefined;
          }
        }
      });

  console.log(convert);
  return res.json(convert);
});

module.exports = router;
