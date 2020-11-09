import { select, geoMercator, selectAll, text } from 'd3'
import {tooltip, handleMouseOver, mouseMove, handleMouseOut } from './tooltip-mouse'

export const dots = (data) => {
    const g = select('g');
    const projection = geoMercator().scale(6000).center([5.116667, 52.17]);


    const dots = g
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'circles')
        .attr('cx', function(d){ return projection([d.location.longitude, d.location.latitude])[0] })
        .attr('cy', function(d){ return projection([d.location.longitude, d.location.latitude])[1] })
        .attr('r', '4px')
        .attr('fill', '#e94560')
        .on('mouseover', handleMouseOver)
        .on('mousemove', mouseMove)
        .on('mouseout', handleMouseOut)
        .on('click', showDetail)      
        


    select('.filter select')
    .selectAll('myoptions')
    .data(data)
    .enter()
    .append('option')
    .attr('class', 'huh')
    .text(function(d){ return d.areadesc })

   console.log(dots) 
}

const showDetail = (d, i) => {
    selectAll('.Navigation .details .test').remove()
    const toArray = Object.entries(i)
    toArray.forEach(([key, value]) => {
          select('.details')
            .append('p')
            .attr('class', 'test')
            .text(`${key} : ${value}`)
      });
  };

