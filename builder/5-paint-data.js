// Attach the data, draw rectangles, pass x, y, width, height
svg.selectAll("bar")
   .data(data)
   .enter()
   .append("rect")
   .attr("x", function(d,i) { return xScale(i); })
   .attr("y", function(d){return yScale(d); })
   .attr("width", xScale.bandwidth())
   .attr("height", function(d){ return height - yScale(d); });