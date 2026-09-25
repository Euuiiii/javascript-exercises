const convertToCelsius = function(fahrenheit) {
  let f = fahrenheit;

  return ((f - 32) * 5/9).toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let c = celsius;

  return ((100 * 9/5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
  