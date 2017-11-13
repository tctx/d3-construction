// Add any transitions to the painted data

.transition() // Chain transition() to painted elements to animate DOM changes
.duration(1000) // Duration in ms
.attr("y", 0) // Changing attributes is supported
.attr("height", height)
.style("fill","blue"); // Style changes are also supported