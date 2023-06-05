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
  return x / y;
}

const operate = (x, op, y) => {
  if (op === "+") {
    displayText = add(x, y);
  } else if (op === "-") {
    subtract(x, y);
  } else if (op === "*") {
    multiply(x, y);
  } else if (op === "/") {
    divide(x, y);
  }
}

const populateDisplay = () => {
  const DISPLAY = document.querySelector(".display");
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
      if (operator.length === 1) {
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
    operate(numOne.join(""), operator.toString(), numTwo.join(""));
    clearCalcStores();
    DISPLAY.textContent = displayText;
  });

  CLEAR_BTN.addEventListener("click", function () {
    clearCalcStores();
    displayText = [];
    DISPLAY.textContent = "";
  });
}

const clearCalcStores = () => {
  numOne = [];
  operator = [];
  numTwo = [];
}

populateDisplay();