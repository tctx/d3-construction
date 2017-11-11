// After we've defined all of our variables to be used later, we can start to paint
// In order to paint, we need an svg canvas
// We will assume that we have a single div located in our html with id="chart"
// Create the SVG container and set the origin allowing space for our margins (we'll put labels in this space later)
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

