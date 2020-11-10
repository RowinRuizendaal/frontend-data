import { select, geoMercator, selectAll } from 'd3'
import {handleMouseOver, mouseMove, handleMouseOut } from './tooltip-mouse'

export const dots = (data) => {
    const g = select('g');
    const projection = geoMercator().scale(6000).center([5.116667, 52.17]);


     g
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
}

const showDetail = (d, i) => {
    selectAll('.description').remove()
    const toArray = Object.entries(i)
    toArray.pop()
    toArray.forEach(([key, value]) => {
          select('.details')
            .append('p')
            .attr('class', 'description')
            .text(`${key} : ${value}`)
      });
  };


