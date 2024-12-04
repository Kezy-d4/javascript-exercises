const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(...nums) {
  let numParams = nums.flat();

  return numParams.reduce((product, num) => product * num, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) {
    return 1; // 0! = 1
  }

  const x = num - 1;

  for (let i = x; i > 0; i--) {
    num *= i; // first: num(4) * x(3) = 12. second: num(12) * x(2) = 24. third: num(24) * x(1) = 24. 4! = 24. 
  }

  return num;
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
