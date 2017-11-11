// Take some array that we want to use with D3
// Assume that each object in the array has properties x_axis, y_axis, width, and height
// Example --> { "x_axis": 50, "y_axis": 100, "height": 30, "width":20, "color" : "blue" }
var yourArray = [];
 
// Define variables for max x value and max y value that will be generated using yourArray
var max_x = 0;
var max_y = 0;
 
// Loop through yourArray, taking each coordinate maximum and adding width/height of each index
for (var i = 0; i < yourArray.length; i++) {
  // Variables in the for loop are temporary until assigned to max_x and max_y
  var temp_x, temp_y;
  var temp_x = yourArray[i].x_axis + yourArray[i].width;
  var temp_y = yourArray[i].y_axis + yourArray[i].height;
  // Set max_x and max_y to whatever the greatest value in our for loop is
  if ( temp_x >= max_x ) { max_x = temp_x; }
  if ( temp_y >= max_y ) { max_y = temp_y; }
}