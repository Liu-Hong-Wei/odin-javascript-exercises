const fibonacci = function (n) {
  let a = 1;
  let b = 1;
  if (n == 0) a = 0;
  if (isNaN(n) || n < 0) a = "OOPS"
  while (n > 2) {
    let t = a;
    a = a + b;
    b = t;
    n--;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
