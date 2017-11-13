// Transitions essentially have two data points, an original and an end
// Chain your transitions together to animate data
// To show data indeces in 'waves' (i.e. coloring your data in part over time), use the delay function

// Assume that you have some original starting point for your data
.transition()
.delay(function(d, i) { return i * 300; }) // Pass each element of the array (i) to a delay function
// Then post the new state (paint new data)