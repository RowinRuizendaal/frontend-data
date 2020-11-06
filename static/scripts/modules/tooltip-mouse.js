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
     .text(`AreaMangerId: ${i.areamanagerid}`) , tooltip.style("visibility", "visible")
     .append('p')
        .text(`Prijs per uur: €${i.pricePerHour}`) , tooltip.style("visibility", "visible")
}

export const mouseMove = (d,i) => {
    tooltip.style('top', (event.pageY-10)+'px').style('left',(event.pageX+10)+'px')  
}

export const handleMouseOut = (d,i) => {
    tooltip.style('visibility', 'hidden')
    tooltip.selectAll('p').remove()
}