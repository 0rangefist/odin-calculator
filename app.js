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

let operate = function (operator, num1, num2) {
  if (operator == '+') {
    return add(num1, num2);
  } else if (operator == '-') {
    return subtract(num1, num2);
  } else if (operator == '*') {
    return multiply(num1, num2);
  } else if (operator == '/') {
    return divide(num1, num2);
  }
};

// console.log(operate('/', 10, 2));
