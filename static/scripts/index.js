// needed for async functions with parcel
import 'regenerator-runtime/runtime'

// make map with zoom functions
import { makeMap } from './modules/zoom';

// Visualize dots on map
import { dots } from './modules/map-dots'

// Filter for parking spots
import { filter } from './modules/filter'




  

  const endPoint = 'https://gist.githubusercontent.com/RowinRuizendaal/43295f6871191c44dd84351a5cff507d/raw/363b36215b024cfe482cdafbde371553444954d5/betaalmethode.json';
  

async function fetchData(url) {
  const res = await fetch(url);
  const json = await res.json();
  const data = await json
  dots(data)
  filter(data)
}

fetchData(endPoint);

