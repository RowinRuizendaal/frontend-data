import { select } from 'd3'
import { showDetail } from './show-detail'

export const filter = (data) => {

    select('.filter select')
    .selectAll('myoptions')
    .data(data)
    .enter()
    .append('option')
    .attr('value', function(d,i) { return i })
    .text(function(d){ return d.areadesc })
    


select('.select')
.data(data)
.on('change', function(d,i) {
    const index = data[select(this).property('value')]
    console.log(index)
    index ? showDetail(d,index) : console.log('Not a valid index')
})


}