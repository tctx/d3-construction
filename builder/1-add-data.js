// First define the data you're going to be working with
// Data will need to be in the form of an array to make sense to D3
// Your array will most likely consist of objects with properties you can access
// For example, you can use a simple array, as seen below

// var data = [12, 18, 24, 30, 36, 42, 48];

// Optionally (or rather preferably), you can read data from a file (eg JSON/CSV/TSV)
// Below we load data from a csv that is located in the same folder as our js file
// If loading data from csv, whatever name you feed to the function is what your data will be referred to throughout painting
// In this example, our data is simply called 'data' but you can call it whatever you like
// Remember to convert any numeric csv data upon upload, because csv data does not carry text vs integer vs decimal distinction

d3.csv("products.csv",function(data){

  // .forEach calls a function for each element in the array
  data.forEach(function(d){
  	// This particular csv has a single column called value1 that we want to convert into numeric data
    d.value1 = +d.value1;
  });

// Insert svg paint here and any other functionality that is dependent upon data (e.g. domains, ranges, scales, etc)

});