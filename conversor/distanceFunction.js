const listaMedidas = [
  { text: "km", value: 0.1 },
  { text: "hm", value: 0.01 },
  { text: "dam", value: 0.001 },
  { text: "m", value: 0.0001 },
  { text: "dm", value: 0.00001 },
  { text: "cm", value: 0.000001 },
  { text: "mm", value: 0.0000001 },
];
const selectElements = Array.from(
  document.getElementsByClassName("form-select")
); //Array.from pega os elementos como de uma lista
listaMedidas.map((item) => {
  console.log(item);
  // selectElements.innerHTML += `<option value="1">${item}</option>`;
  selectElements.map((element) => {
    element.innerHTML += `<option value="${item.value}">${item.text}</option>`;
  });
});
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
