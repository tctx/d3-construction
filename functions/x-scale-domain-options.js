// Assign the xScale variable a scaleBand() function
var xScale = d3.scaleBand();

// If we simply have values in an array, we can use the length of our array to map the domain
// Use range function and length of data set to pass a domain
xScale.domain(d3.range(data.length))
      .rangeRound([0,width])
      .paddingInner(0.05);

// On the other hand, if we have ordinal data (like months for example), we can map our data using data.map
xScale.domain(data.map(function(d){ return d.month; });
	  .rangeRound([0,width])
      .paddingInner(0.05);