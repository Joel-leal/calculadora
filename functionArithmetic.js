function operationArithmetic(numberPrimary, numberSecondary, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = numberPrimary + numberSecondary;
      break;
    case "-":
      result = numberPrimary - numberSecondary;
      break;
    case "*":
      result = numberPrimary * numberSecondary;
      break;
    case "/":
      result = numberPrimary / numberSecondary;
      break;
  }
  return result;
}
