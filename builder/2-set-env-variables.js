// Once we have data, we now need to define variables used by D3
// Examples include chart dimensions, scales, and anything else that can be defined now and accessed later

// We will start with chart dimensions
var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5},
    width = 960 - margin.right,
    height = 500 - margin.top - margin.bottom;

// Then we can define the scale of the chart
// Domain takes your data interval and interpolates it fractionally to whatever you want the output range to be
// We use domain and range to essentially ensure that our data maps well to however we defined the svg (eg L x W)
// Pro tip: double check that scale funtions match D3 v4 convention as the namespace changed from v3-->v4

// Here we will use our max data point and map it to 
var yScale = d3.scaleLinear()
				.domain([0, d3.max(data)])
				.range([height, 0]);
// This particular scale is for a bar chart, and we can simply update the scale function depending our our data set
var xScale = d3.scaleBand().domain(d3.range(data.length)) // Use range function and length of data set to pass a domain
				.rangeRound([0,width])
				.paddingInner(0.05);

// Define the axes as well
// The x & y axes.
var xAxis = d3.axisBottom(xScale).ticks(12, d3.format(",d")),
    yAxis = d3.axisLeft(yScale);