function handleChange() {
  let outputElement = document.getElementById("output");
  let inputValue = new Decimal(
    document.getElementById("input").value.replace(",", ".")
  );
  let selectInput = new Decimal(document.getElementById("select-input").value);
  let selectOutput = new Decimal(
    document.getElementById("select-output").value
  );
  console.log(selectInput, selectOutput, inputValue);

  let result = inputValue.times(selectInput.div(selectOutput));
  outputElement.value = result;
}
