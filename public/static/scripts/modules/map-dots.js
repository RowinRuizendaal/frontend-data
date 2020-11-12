import { select, geoMercator, selectAll, ascending } from 'd3'
import {handleMouseOver, mouseMove, handleMouseOut } from './tooltip-mouse'
import { showDetail } from './show-detail'

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

        function reassignDots(data) {
            const dots = g.selectAll('circle')
                             .data(data)
      
            dots 
              .attr('cx', function(d) { return projection([d.location.longitude, d.location.latitude])[0] })
              .attr('cy', function(d) { return projection([d.location.longitude, d.location.latitude])[1] })
          
            dots.enter()
                .append('circle')
                .attr('r', 4)
                .attr('fill', '#e94560')
                .attr('cx', function(d) { return projection([d.location.longitude, d.location.latitude])[0] })
                .attr('cy', function(d) { return projection([d.location.longitude, d.location.latitude])[1] })
                .on('mouseover', handleMouseOver)
                .on('mousemove', mouseMove)
                .on('mouseout', handleMouseOut)
                .on('click', showDetail)
      
            dots.exit()
                  .remove()
            }


        const arraywithvalues = []

        data.forEach(el => {
            arraywithvalues.push(el.paymentmethod.slice(0, 4));
        });
        
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }
        
        const filterUnique = arraywithvalues.filter(unique)
        filterUnique.sort(ascending) // built in with D3
        
        
         // Make a div inside form element for all payment methods
         const form = select('form')
         .selectAll('div')
         .data(filterUnique)
         .enter()
         .append('div')
         .attr('class', 'radioBtn')
        
          // Make radiobuttons inside the input form
          form.append('input')
            .attr('type', 'radio')
            .attr('name', 'Radio')
            .attr('id', (d,i) => filterUnique[i])
            .on('change', (d, i) => {
              updatemap(i); // Call function to reassing dots
            })
        
              // inside the div make a label with the text of the year array
          form.append('label')
          .attr('for', (d,i) => filterUnique[i])
          .text((d,i) => filterUnique[i])
        
           // Filter the data and make a new array with the filtered data
           function updatemap(i) {
            const paymentmethods = data.filter(row => row.paymentmethod.slice(0, 4) == i)
            console.log(paymentmethods)
            reassignDots(paymentmethods);
          }
          
          const resetBtn = select('.reset')

          resetBtn
            .on('click', () => {
              reassignDots(data)
              uncheckAllRadio()
            })
            
            //reset check on boxes
            function uncheckAllRadio() {
              const radioBtns = selectAll('input[type=radio]')
              radioBtns
                .property('checked', false)
            }
}

