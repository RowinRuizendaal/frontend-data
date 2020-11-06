// needed for async functions with parcel
import 'regenerator-runtime/runtime'

// Zoom map on specific town
import { makeMap } from './modules/zoom';

// Visualize dots on map
import { dots } from './modules/map-dots'



  

  const endPoint = 'https://api.npoint.io/eea687fd3a4f0e15e9f1';
  fetchData(endPoint);
  

async function fetchData(url) {
  const res = await fetch(url);
  const json = await res.json();
  const data = await json
  dots(data)
}


  
