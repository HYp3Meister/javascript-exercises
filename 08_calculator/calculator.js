const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(sum) {
	return sum.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function(multiply) {
  return multiply.reduce((partialSum, a) => partialSum * a);
};

const power = function(x,y) {
	return Math.pow(x,y)
};

const factorial = function(n, r=1) {
  while (n > 0) r *= n--;
  return r;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
