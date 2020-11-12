// needed for async functions with parcel
import 'regenerator-runtime/runtime'

// make map with zoom functions
import { makeMap } from './modules/zoom';

// Visualize dots on map
import { dots } from './modules/map-dots'

// Filter for parking spots
import { filter } from './modules/filter'



  

  const endPoint = 'https://gist.githubusercontent.com/RowinRuizendaal/44405f1b3a4de6099b901ba474c380b4/raw/7fe71a6ab4ef3f9d04e197054a7777c877b6ae6a/betaalmethode.json';
  

async function fetchData(url) {
  const res = await fetch(url);
  const json = await res.json();
  const data = await json
  dots(data)
  filter(data)
}

fetchData(endPoint);
