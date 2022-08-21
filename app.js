let add = function (num1, num2) {
  return num1 + num2;
};

let subtract = function (num1, num2) {
  return num1 - num2;
};

let multiply = function (num1, num2) {
  return num1 * num2;
};

let divide = function (num1, num2) {
  if (num2 == 0) {
    return "LOL. Can't do that!";
  }
  return num1 / num2;
};

// console.log(divide(2, 0.));
