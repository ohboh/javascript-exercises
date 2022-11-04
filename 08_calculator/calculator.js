const add = function(...numbers) {
  let result = 0
	for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};

const subtract = function(number1, number2) {
  let result = number1 - number2
  return result;
};

const sum = function(numbers) {
  let result = 0
	for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};

const multiply = function(numbers) {
  let result = 1;
	for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};

const power = function(number, powerOf) {
  let result = number;
	for (let i = 0; i < powerOf - 1; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
  let result = number;
  if (number > 0){
    for (let i = number - 1; i > 1; i--) {
      result *= i;
    }
  }
  else {
    result = 1;
  }

  return result;
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
