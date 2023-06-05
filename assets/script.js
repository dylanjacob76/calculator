const DISPLAY = document.querySelector(".display");
let numOne = [];
let operator = [];
let numTwo = [];
let displayText = [];

const add = (x, y) => {
  return +x + +y;
}

const subtract = (x, y) => {
  return x - y;
}

const multiply = (x, y) => {
  return x * y;
}

const divide = (x, y) => {
  if (y === "0") {
    return "Very cheeky indeed..."
  }
  return x / y;
}

const operate = (x, op, y) => {
  if (op === "+") {
    displayText = add(x, y);
  } else if (op === "-") {
    displayText = subtract(x, y);
  } else if (op === "*") {
    displayText = multiply(x, y);
  } else if (op === "/") {
    displayText = divide(x, y);
  }
}

const populateDisplay = () => {
  const NUM_BTNS = document.querySelectorAll(".num-btn");
  const OP_BTNS = document.querySelectorAll(".op-btn");
  const EQUALS_BTN = document.querySelector(".equals-btn");
  const CLEAR_BTN = document.querySelector(".clear-btn");

  for (let i = 0; i < NUM_BTNS.length; i++) {
    let numBtn = NUM_BTNS[i];
    numBtn.addEventListener("click", function () {
      if (operator.length > 0) {
        numTwo.push(numBtn.textContent);
        DISPLAY.textContent = numOne.join("") + " " + operator.toString() + " " + numTwo.join("");
      } else {
        numOne.push(numBtn.textContent);
        DISPLAY.textContent = numOne.join("");
      }
    });
  }

  for (let j = 0; j < OP_BTNS.length; j++) {
    let opBtn = OP_BTNS[j];
    opBtn.addEventListener("click", function () {
      if (operator.length === 1 && numTwo.length === 0) {
        operator.splice(0, 1);
        operator.push(opBtn.textContent);
      } else {
        operator.push(opBtn.textContent);
      }

      // resets numTwo if user changes operator
      if (numTwo.length > 0) {
        numTwo = [];
      }

      DISPLAY.textContent = numOne.join("") + " " + operator;
    });
  }

  EQUALS_BTN.addEventListener("click", function () {
    if (numTwo.length === 0 && operator.length === 0) {
      DISPLAY.textContent = numOne.join("");
    } else {
      operate(numOne.join(""), operator.toString(), numTwo.join(""));
      DISPLAY.textContent = displayText;
      numOne = [];
      numOne.push(displayText.toString());
      numTwo = [];
      operator = [];
    }
  });

  CLEAR_BTN.addEventListener("click", function () {
    numOne = [];
    numTwo = [];
    operator = [];
    displayText = [];
    DISPLAY.textContent = "";
  });
}

populateDisplay();