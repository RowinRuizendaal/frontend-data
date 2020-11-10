import { select } from 'd3'

export const filter = (data) => {
    select('.filter select')
    .selectAll('myoptions')
    .data(data)
    .enter()
    .append('option')
    .text(function(d){ return d.areadesc })
}