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
  screen.classList.remove('visible');
  screen.textContent = val;

  //slight (1ms) delay to enable css transition to work
  setTimeout(function () {
    screen.classList.add('visible');
  }, 1);
};

let getValFromScreen = function () {
  return screen.textContent;
};

let clearScreen = function () {
  printValToScreen('');
};

const compute = function (storedOperator, storedValue, screenValue) {
  if (storedOperator == '') {
    return screenValue;
  } else {
    let output = operate(storedOperator, storedValue, screenValue);
    return output;
  }
};

const resetCalculator = function () {
  //clear screen & reset to defaults
  clearScreen();
  printValToScreen(0);
  storedOperator = '';
  storedValue = '';
  isDoneTyping = true;
};

const deleteLastCharacter = function (text) {
  return text.slice(0, -1);
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
      resetCalculator();
    } else if (currentInput == '⌫') {
      //if screen value is a single digit,
      //display 0 after deleting
      if (/^\d$/.test(getValFromScreen())) {
        printValToScreen(0);
        isDoneTyping = true;
      } else {
        let result = deleteLastCharacter(getValFromScreen());
        printValToScreen(result);
        isDoneTyping = false;
      }
    } else if (currentInput == '%') {
      printValToScreen(getValFromScreen() / 100);
      isDoneTyping = true;
    } else if (currentInput == '.') {
      //if screen value is a float & the user is not done typing,
      //do nothing when this period(.) button is pressed
      if (/\./.test(getValFromScreen() && !isDoneTyping)) {
        //button press does nothing
      } else {
        if (isDoneTyping) {
          clearScreen();
          isDoneTyping = false;
        }
        printValToScreen(`${getValFromScreen()}${currentInput}`);

        //check if screen value has no preceeding 0 and add it
        if (/^\.$/.test(getValFromScreen())) {
          printValToScreen('0' + getValFromScreen());
        }
      }
    } else if (currentInput == '=') {
      let result = compute(storedOperator, storedValue, getValFromScreen());
      printValToScreen(result);
      storedOperator = '';
      isDoneTyping = true;
    } else {
      if (isDoneTyping) {
        clearScreen();
        isDoneTyping = false;
      }
      printValToScreen(`${getValFromScreen()}${currentInput}`);
    }
  });
});
