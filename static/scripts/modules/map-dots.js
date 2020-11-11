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
      
            dots.exit()
                  .remove()
            }


        const arraywithvalues = []

        data.forEach(element => {
            arraywithvalues.push(element.pricePerHour.slice(0, 4));
        });
        
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }
        
        const filteredUniqueValues = arraywithvalues.filter(unique)
        filteredUniqueValues.sort(ascending)
        
        
         // Make a div inside form for each year
         const form = select('form')
         .selectAll('div')
         .data(filteredUniqueValues)
         .enter()
         .append('div')
         .attr('class', 'radioBtn')
        
          // inside the div make a input with the name of the year array
          form.append('input')
            .attr('type', 'radio')
            .attr('name', 'Radio')
            .attr('id', (d,i) => filteredUniqueValues[i])
            .on('change', (d, i) => {
              changeYear(i);
            })
        
              // inside the div make a label with the text of the year array
          form.append('label')
          .attr('for', (d,i) => filteredUniqueValues[i])
          .text((d,i) => `€ ${filteredUniqueValues[i]}`)
        
           // Filter the data and make a new array with the filtered data
           function changeYear(i) {
            const filteredYear = data.filter(row => row.pricePerHour.slice(0, 4) == i)
            console.log(filteredYear)
            reassignDots(filteredYear);
          }
          
          const resetBtn = select(".reset-button")

          resetBtn
            .on("click", function() {
              reassignDots(data)
              uncheckAllRadio()
            })
        
            function uncheckAllRadio() {
              const radioBtns = selectAll("input[type=radio]")
              radioBtns
                .property("checked", false)
            }
}


