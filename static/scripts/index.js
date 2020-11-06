// needed for async functions with parcel
import 'regenerator-runtime/runtime'

// Zoom map on specific town
import { zoommFunction } from './modules/zoom';

// Visualize dots on map
import { dots } from './modules/map-dots'



  

  const endPoint = 'http://localhost:3000/betaalmethode';
  fetchData(endPoint);
  

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  dots(data)
}


  
