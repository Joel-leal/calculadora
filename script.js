// código de teste de implementação das operações na calculadora
let displayText = "";
let numOne = 0;
let numTwo = 0;
let operation;
const listSymbols = ["-", "+", "/", "x"];
function handleClick(symbol) {
  const element = document.getElementById("output");
  displayText = element.innerText;
  if (symbol === "=") {
    numTwo = parseFloat(displayText);
    displayText = operationArithmetic(numOne, numTwo, operation);
  } else if (listSymbols.includes(symbol)) {
    //Pega o primeiro número e o operador
    numOne = parseFloat(displayText);
    displayText = "";
    operation = symbol;
  } else if (symbol === "<") {
    displayText = displayText.slice(0, displayText.length - 1);
  } else {
    //incremento de algarismos no número
    displayText += symbol;
  }
  element.innerText = displayText;
}

function handleClear() {
  const element = document.getElementById("output");
  displayText = "";
  element.innerText = displayText;
}

function operationArithmetic(numberPrimary, numberSecondary, operator) {
  switch (operator) {
    case "+":
      return numberPrimary + numberSecondary;
    case "-":
      return numberPrimary - numberSecondary;
    case "x":
      return numberPrimary * numberSecondary;
    case "/":
      return numberPrimary / numberSecondary;
  }
}
