const convertToCelsius = function(degreeFahrenheit) {

  // °C = (°F - 32) × 5/9 
  
  console.log(parseFloat(((degreeFahrenheit - 32) * (5 / 9)).toFixed(1)));
  
  return parseFloat(((degreeFahrenheit - 32) * (5 / 9)).toFixed(1));
};


const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
