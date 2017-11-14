// When we have a data set, we sometimes want to find the max value
// For example, we might want the max data value when mapping a yScale domain -> range

// Find the max value of a data set w/ attribute value1
d3.max(data,function(d){return d.value1;}); 

// Example of how a max function might be used in practice
var maxValue = d3.max(data,function(d){return d.value1;}); // Returns a number

var yScale = d3.scaleLinear()
        .domain([0, maxValue]) // Drop maxValue of the data set into the domain function to map into range
        .range([height, 0]);