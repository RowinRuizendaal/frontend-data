import { select, geoMercator } from 'd3'

export const tooltip = select('body')
.append('div')
.style('position', 'absolute')
.style('z-index', '10')
.style('visibility', 'hidden')
.attr('class', 'tooltip')

export const handleMouseOver = (d,i) => {
    tooltip
    .append('p')
     .text(i.areadesc) , tooltip.style('visibility', 'visible')
}

export const mouseMove = (event,d,i) => {
    tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')  
}

export const handleMouseOut = (d,i) => {
    tooltip.style('visibility', 'hidden')
    tooltip.selectAll('p').remove()
}