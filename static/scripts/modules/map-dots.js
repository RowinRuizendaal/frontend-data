import nlData from "./nltopo.js";
import { select, selectAll ,json, geoPath, geoMercator, zoom, zoomIdentity, zoomTransform, pointer, svg } from 'd3'
import { features } from 'topojson'

export const dots = (data) => {
    const svg = select("svg");
    const g = select("g");
    const projection = geoMercator().scale(6000).center([5.116667, 52.17]);

    console.log(data);

   data.forEach(element => {
       const long = element.longitude;
       const lat = element.latitude;


       g.append("circle")
       .attr("cx", function(d){ return projection([long,lat])[0] })
       .attr("cy", function(d){ return projection([long, lat])[1] })
       .attr("r", "2px")
       .attr("fill", "red")


       // Tooltip
       const Tooltip = select('svg')
       .append("div")
       .attr("class", "tooltip")
       .style("opacity", 1)
       .style("background-color", "white")
        .append("p")
       .attr("class", "test")
       .text(element.areamanagerid)
    });
}