const convertToCelsius = function(F) {
    return Math.round(((F-32)*(5/9)) * 10) / 10;
};

const convertToFahrenheit = function(C) {
    return Math.round(((C * (9/5)) + 32) * 10) / 10;
};

 
// npm test tempConversion.spec.js
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
