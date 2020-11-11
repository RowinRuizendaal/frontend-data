// needed for async functions with parcel
import 'regenerator-runtime/runtime'

// make map with zoom functions
import { makeMap } from './modules/zoom';

// Visualize dots on map
import { dots } from './modules/map-dots'

// Filter for parking spots
import { filter } from './modules/filter'



  

  const endPoint = 'https://gist.githubusercontent.com/RowinRuizendaal/44405f1b3a4de6099b901ba474c380b4/raw/b55532b92a5b6507bbc14f41dc876fc58a0cdf75/betaalmethode.json';
  

async function fetchData(url) {
  const res = await fetch(url);
  const json = await res.json();
  const data = await json
  dots(data)
  filter(data)
}

fetchData(endPoint);

