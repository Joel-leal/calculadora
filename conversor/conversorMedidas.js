function converter() {
  let distance = prompt("Digite uma distância em metros:");
  let Value = parseFloat(distance.replace(",", "."));
  let ValueConverse = Value.toLocaleString("pt-BR", { style: "decimal" });
  let km = ValueConverse / 1000;
  let hm = ValueConverse / 100;
  let dam = ValueConverse / 10;
  let m = ValueConverse;
  let dm = ValueConverse * 10;
  let cm = ValueConverse * 100;
  let mm = ValueConverse * 1000;
  const returnig = document.getElementById("result");
  returnig.innerHTML =
    km +
    " Km <br>" +
    hm +
    " hm <br>" +
    dam +
    " dam <br>" +
    m +
    " m <br>" +
    dm +
    " dm <br>" +
    cm +
    " cm <br>" +
    mm +
    " mm <br>";
}
