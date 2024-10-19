const add = function () {
  return arguments[0] + arguments[1];
};

const subtract = function () {
  return arguments[0] - arguments[1];
};

const sum = function () {
  return [...arguments].reduce((prev, item) => prev + item, 0);
};

const multiply = function () {
  return [...arguments].reduce((prev, item) => prev * item, 0);
};

const power = function () {
  return arguments[0] ** arguments[1];
};

const factorial = function () {
  if (arguments[0] === 0){
    return 1;
  }
  return arguments[0] * factorial(arguments[0]-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
