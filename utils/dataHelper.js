
/**
 * Get data from multiple columns
 * @param {array} dataset - Array containing dataset
 * @return {array} array containing values from the location column
 */
// location -> latitude & longitude
const getCoords = (dataset) => {
  return dataset.map((el) => {
    return {
      areaid: el.areaid,
      areamanagerid: el.areamanagerid,
      areadesc: el.areadesc,
      location: {
        longitude: el.location.longitude,
        latitude: el.location.latitude,
      },
    };
  } );
};


const duplicate = ((dataset) => {
  return [...new Set(dataset)];
});


/**
 * Combine 2 datasets based on a primary key value
 * @param {array} dataset1 - Array containing dataset
 * @param {array} dataset2 - Array containing dataset
 * @param {string} keyword - key you want to combine the data with
 * @return {array} A new object with the two combined datasets
 */
// worked together with Sam to refactor the code:
// https://github.com/Vuurvos1/functional-programming/blob/main/modules/dataHelpers.js#L114-L140
const combineDataset = ((dataset1, dataset2, keyword) => {
  const values = [];

  for (const i of dataset1) {
    let output = {};
    // Find match between the datasets and keyword
    const findMatch = dataset2.find((element) => {
      return i[keyword] == element[keyword];
    });
    // if match return true
    if (findMatch) {
      // store value in output
      output = findMatch;
      // Loop over the other items are that stored in other sets
      for (const [keyword, value] of Object.entries(i)) {
        // If it doesnt exist store it
        if (!output[keyword]) {
          output[keyword] = value;
        }
      }
      values.push(output);
    } else {
      // Nothing was found to match with
    }
  }
  return values;
});

const pricePerHour = ((dataset) => {
  return dataset.map((el) => {
    return {
      areamanagerid: el.areamanagerid,
      pricePerHour: roundToTwoDecimals(el.amountfarepart / el.stepsizefarepart * 60),
    };
  } );
});

// https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
const roundToTwoDecimals = (((number) => {
  return number.toFixed(2);
}));


// convert latitude & longitude with an api
const streetName = ((data) => {
  const input = data.map(((el) => {
    return {
      latitude: el.location.latitude,
      longitude: el.location.longitude,
    };
  }));
  console.log(input);
  return input;
});


module.exports = {
  getCoords,
  combineDataset,
  pricePerHour,
  streetName,
  duplicate,
};
