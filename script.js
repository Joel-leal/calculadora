// código de teste de implementação das operações na calculadora
let displayTest = "";
let numOne;
let numTwo;
let operation;
function handleClick(symbol) {
  switch (symbol) {
    case "+":
      numOne = parseFloat(displayTest); // transformando a string em número real
      displayTest = "";
      operation = symbol;
      break;
    case "-":
      numOne = parseFloat(displayTest); // transformando a string em número real
      displayTest = "";
      operation = symbol;
      break;
    case "*":
      numOne = parseFloat(displayTest); // transformando a string em número real
      displayTest = "";
      operation = symbol;
      break;
    case "/":
      numOne = parseFloat(displayTest); // transformando a string em número real
      displayTest = "";
      operation = symbol;
      break;
    case "=":
      numTwo = parseFloat(displayTest);
      if (symbol == "+") {
        displayTest = numOne + numTwo;
      }
      if (symbol == "-") {
        displayTest = numOne - numTwo;
      }
      if (symbol == "/") {
        displayTest = numOne / numTwo;
      }
      if (symbol == "*") {
        displayTest = numOne * numTwo;
      }
      break;
    default:
      displayTest += symbol;
  }
  const element = document.getElementById("output");
  element.innerText = displayTest;
}

function handleClear() {
  const element = document.getElementById("output");
  displayTest = "";
  element.innerText = displayTest;
}
