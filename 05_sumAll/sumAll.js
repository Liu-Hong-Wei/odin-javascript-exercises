const sumAll = function (first, second) {
  if (
    typeof first != "number" ||
    typeof second != "number" ||
    first < 0 ||
    second < 0 ||
    first % 1 !== 0 ||
    second % 1 !== 0
  ) {
    return "ERROR";
  }
  minOne = first > second ? second : first;
  maxOne = first > second ? first : second;
  let res = 0;
  for (let i = minOne; i <= maxOne; ++i) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
