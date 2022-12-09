const leapYears = function(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
    } else {
        return false
    }
  }
  
// npm test leapYears.spec.js
// Do not edit below this line
module.exports = leapYears;
