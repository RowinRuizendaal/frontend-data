// Zoom map on specific town
import { zoommFunction } from './modules/zoom';

// Visualize dots on map
import { dots } from './modules/map-dots'

import { axios } from 'axios'


  

  const endPoint = "https://opendata.rdw.nl/resource/cgqw-pfbp.json?$limit=100";
  fetchData(endPoint);
  

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
  
