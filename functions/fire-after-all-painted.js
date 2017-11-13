 // Callback function that fires after all elements have been painted
 // Use on the end of a transition() chain with .call
 // e.g. transition().call(endAll(),function(){alert("done");});

 function endAll(transition, callback) { 
    if (typeof callback !== "function") throw new Error("Wrong callback in endall");
    if (transition.size() === 0) { callback() }
    var n = 0; 
    transition 
        .each(function() { ++n; }) 
        .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
  } 