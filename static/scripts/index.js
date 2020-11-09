// needed for async functions with parcel
import 'regenerator-runtime/runtime'

// make map with zoom functions
import { makeMap } from './modules/zoom';

// Visualize dots on map
import { dots } from './modules/map-dots'




  

  const endPoint = 'https://gist.githubusercontent.com/RowinRuizendaal/43295f6871191c44dd84351a5cff507d/raw/bd92d2058a992aa0839622d5c23d0a377f334647/betaalmethode.json';
  

async function fetchData(url) {
  const res = await fetch(url);
  const json = await res.json();
  const data = await json
  dots(data)
}

fetchData(endPoint);

