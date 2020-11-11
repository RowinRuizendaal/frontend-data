import {
    select,
    json,
    geoPath,
    geoMercator,
    zoom,
    zoomIdentity,
    zoomTransform,
    pointer,
    selectAll,
    ascending
}
from 'd3'
// import { select, selectAll} from 'd3'
import { showDetail } from './show-detail'
import { render } from './bar-chart'

export const filter = (data) => {

    select('.filter select')
    .selectAll('myoptions')
    .data(data)
    .enter()
    .append('option')
    .attr('value', function(d,i) { return i })
    .text(function(d){ return d.areadesc })

    // multiselect
    selectAll('.multi-select .drop1 select')
    .selectAll('myoptions')
    .data(data)
    .enter()
    .append('option')
    .attr('value', function(d,i) { return i })
    .text(function(d){ return d.areadesc })


selectAll('.dropdown1')
.data(data)
.on('change', () => {
 
    const index1 = data[select('.dropdown1').property('value')]
    let index2 = data[select('.dropdown2').property('value')]

    if (!index2) {
        index2 = data[9]
    }

    console.log(index1, index2)

    // index ? showDetail(d,index) : console.log('Not a valid index')
    render(index1, index2, data)
})

select('.select')
.data(data)
.on('change', (d , i) => {
    const index = data[select(this).property('value')]
    console.log(index)
    index ? showDetail(d,index) : console.log('Not a valid index')
    
})
}