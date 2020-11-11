import { select, selectAll } from 'd3'

export const showDetail = (d, i) => {
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