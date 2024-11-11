const removeFromArray = function(array, ...targets) {

  for (const target of targets) {

    while (true) {

      if (!(array.includes(target))) {
        break;

      } else {
        array.splice(array.indexOf(target), 1);
      }
    }
  }
  return array;
};
      
/*
PLANNING...

THE TASK:
Implement function removeFromArray. The function will expect the following arguments: an array, and any number of (data type sensitive) elements to be removed from said array (hereafter referred to as target elements). The function will process and assess the array, remove any target elements from it if they are present, then return the resulting array. 

If no target elements are provided, or if none of the target elements are present in the array, the function will simply return the array, unaltered. If any target element occurs more than once in the array, the function should remove each occurrence. 

THE PROCESS:
The target elements will be optional arguments, if none are provided, the function will simply return the argument array, unaltered. 

Get information about the array such as its length as well as its elements and their data type. Get information about the target elements such as their length and data type. Loop through the array, checking for the existence of each target element, and removing each occurrence of any target element found. Return the resulting array. 

USEFUL TOOLS:
array.splice()
array.indexOf()
array.includes()

PSEUDO-CODE:

*/

// Do not edit below this line
module.exports = removeFromArray;
