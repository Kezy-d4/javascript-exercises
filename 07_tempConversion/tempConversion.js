const convertToCelsius = function(degreeFahrenheit) {

  // °C = (°F - 32) × 5/9

  console.log(parseInt((degreeFahrenheit - 32) * (5 / 9).toFixed(1)))
  return parseInt((degreeFahrenheit - 32) * (5 / 9).toFixed(1)); 
};


const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
