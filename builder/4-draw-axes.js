// Add the x-axis using append (be sure to group it so we can transform it if need be)
svg.append("g")
    .attr("class", "x-axis")
    // translate by the height variable to ensure that our scale for this particular chart is at the bottom
    .attr("transform", "translate(0," + height + ")")
   	// .call invokes the specified function exactly once (aka DRY -- handy shortcut to reuse code)
    .call(xAxis);

// Add the y-axis sing append (be sure to group it so we can transform it if need be)
svg.append("g")
    .attr("class", "y-axis")
    // .call invokes the specified function exactly once (aka DRY -- handy shortcut to reuse code)
    .call(yAxis);