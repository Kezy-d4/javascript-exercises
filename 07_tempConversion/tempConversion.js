const convertToCelsius = function(degreeFahrenheit) {

  // °C = (°F - 32) × (5/9)

  return parseFloat(((degreeFahrenheit - 32) * (5 / 9)).toFixed(1));
};


const convertToFahrenheit = function(degreeCelsius) {

  // °F = °C × (9/5) + 32

  console.log(parseFloat((degreeCelsius * (9 / 5) + 32).toFixed(1)));
  return parseFloat((degreeCelsius * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
