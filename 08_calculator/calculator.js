const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(ary) {
  // sumvVal contains running total, 0 arg inits it
  return ary.reduce( (sumVal, val) => sumVal + val, 0);
};

const multiply = function(ary) {
  return ary.reduce( (multVal, val) => multVal * val, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	let fact = 1;
  let cur = a;
  

  while(cur - 1 > 0) {
    fact *= cur--;
  }

  return fact;
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
