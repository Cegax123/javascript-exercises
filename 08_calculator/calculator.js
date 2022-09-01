const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const sum = function(arr) {
  let result = 0;
  
  for(let i = 0; i < arr.length; i++)
    result += arr[i];

  return result;
};

const multiply = function(arr) {
  let result = 1;
  
  for(let i = 0; i < arr.length; i++)
    result *= arr[i];

  return result;
};

const power = function(num, exp) {
  let result = 1;

  for(let i = 0; i < exp; i++)
    result *= num;

  return result;
};

const factorial = function(num) {
  let result = 1;

  for(let i = 1; i <= num; i++)
    result *= i;

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
