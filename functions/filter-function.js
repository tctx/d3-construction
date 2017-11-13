// Use a filter function when you want to highlight or call attention to data based on a criteria
// For example, you can filter for data over a certain amount or matching a certain index
// Use filter as part of transitions

// Filter for amounts greater than 36
.transition()
.filter(function(d){ return d >  36; });

// Filter for the index matching position 1
.transition()
.filter(function(d, i){ return i === 1; });

// Filter for the first index in our data array
.transition()
.filter(function(d, i){ return i ===  data.length-1; })

// Filter for the last index in our data array
.transition()
.filter(function(d, i){ return i ===  data.length-1; })

// Filter for the max value index in our data array
.transition()
.filter(function(d, i){ return i ===  data.indexOf(d3.max(data)); })

// Filter for the min value index in our data array
.transition()
.filter(function(d, i){ return i ===  data.indexOf(d3.min(data)); })