//Global variables
let storedOperator = '';
let storedValue = '';
let isDoneTyping = true;
let screen = document.querySelector('.screen h1');

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
    return 'oh no! 😩';
  }
  return num1 / num2;
};

let operate = function (operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator == '+') {
    return add(num1, num2);
  } else if (operator == '-') {
    return subtract(num1, num2);
  } else if (operator == 'X') {
    return multiply(num1, num2);
  } else if (operator == '/') {
    return divide(num1, num2);
  }
};

let printValToScreen = function (val) {
  //animate
  screen.classList.remove('visible');
  screen.textContent = val;

  setTimeout(function () {
    screen.classList.add('visible');
  }, 1);
};

let getValFromScreen = function () {
  return screen.textContent;
};

let clearValFromScreen = function () {
  screen.textContent = '';
};

const compute = function (storedOperator, storedValue, screenValue) {
  if (storedOperator == '') {
    return screenValue;
  } else {
    let output = operate(storedOperator, storedValue, screenValue);
    return output;
  }
};

//Buttons
let buttons = document.querySelectorAll('.row button');
//Button click event listener
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let currentInput = button.textContent;
    if (
      currentInput == '+' ||
      currentInput == '-' ||
      currentInput == 'X' ||
      currentInput == '/'
    ) {
      let result = compute(storedOperator, storedValue, getValFromScreen());
      printValToScreen(result);
      storedValue = getValFromScreen();
      storedOperator = currentInput;
      isDoneTyping = true;
      //   printValToScreen(storedOperator);
    } else if (currentInput == 'C') {
      //clear
    } else if (currentInput == '⌫') {
      //backspace
    } else if (currentInput == '%') {
      //percentage
    } else if (currentInput == '.') {
      //decimal point
    } else if (currentInput == '=') {
      //equals
      let result = compute(storedOperator, storedValue, getValFromScreen());
      printValToScreen(result);
      storedOperator = '';
      isDoneTyping = true;
    } else {
      if (isDoneTyping) {
        clearValFromScreen();
        printValToScreen(`${getValFromScreen()}${currentInput}`);
        isDoneTyping = false;
      } else {
        printValToScreen(`${getValFromScreen()}${currentInput}`);
      }
    }
  });
});
