import {
    select,
    selectAll,
    scaleLinear,
    scaleBand,
    axisLeft,
    axisBottom,
    max,
    transition,
    group

} from 'd3';



export function makeNewData(index1, index2) {
    const combine = [index1, index2]
    const arr = combine.map((el) => {
        return el
    })

    console.log(arr)
    redraw(arr)
}

function redraw(receiveddata) {

    const margin = {
            top: 20,
            right: 5,
            bottom: 40,
            left: 250
        },
        width = 800 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = select('.multi-select')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .attr('class', 'graph')
        .append('g')
        .attr('transform',
            'translate(' + margin.left + ',' + margin.top + ')')


    // Add X axis
    const x = scaleLinear()
        .domain([0, 6])
        .range([0, width]);

    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end')

    svg.append('text')
        .attr('transform',
            'translate(' + (width / 2) + ' ,' +
            (height + margin.top + 40) + ')')
        .attr('fill', '#FFFF')
        .style('text-anchor', 'middle')
        .text('prijs per uur');

    // Y axis
    const y = scaleBand()
        .range([0, height])
        .domain(receiveddata.map(function (d) {
            return d.areadesc
        }))
        .padding(.1)
    svg.append('g')
        .attr('class', 'axis axis-y')
        .call(axisLeft(y))

    // Bars
    svg.selectAll('myRect')
        .data(receiveddata)
        .enter()
        .append('rect')
        .attr('class', 'balk')
        .attr('x', x(0))
        .attr('y', function (d) {
            return y(d.areadesc);
        })
        .attr('width', function (d) {
            return x(d.pricePerHour);
        })
        .attr('height', y.bandwidth())
        .attr('fill', '#69b3a2')


    //update
    const bars = selectAll('.balk').data(receiveddata)

    bars
        .attr('x', x(0))
        .attr('y', function (d) {
            return y(d.areadesc);
        })
        .attr('width', function (d) {
            return x(d.pricePerHour);
        })
        .attr('height', y.bandwidth())



    //EXIT
    bars.exit()
        .remove()
        // reset y axis
        select('.axis-y')
              .call(axisLeft(y))
}