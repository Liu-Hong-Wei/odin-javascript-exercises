const convertToCelsius = function (n) {
  let res = ((n - 32) * 5) / 9
  return res % 1 === 0 ? res : Math.round(res * 10) / 10;
};

const convertToFahrenheit = function (n) {
  let res = (n * 9) / 5 + 32;
  return res % 1 === 0 ? res : Math.round(res * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
