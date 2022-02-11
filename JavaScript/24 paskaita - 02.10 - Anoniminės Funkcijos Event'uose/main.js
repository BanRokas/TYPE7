/*
  Syntax:
    function(){
      veiksmai
    }
  0) function manoFunkcija(){veiksmai};
  1) let manoFunkcija = function(){veiksmai};
  2) let manoFunkcija = function(parametras){veiksmai su parametras};
  3) setTimeout(function(){veiksmai}, 2000);
  4) (function(){veiksmai})(); - savaime išsikviečianti funkcija
  5) let manoFunkcija = () => {veiksmai}; - arrow/lambda funkcija
  6) let manoFunkcija = parametras => {veiksmai su parametras}; - arrow funkcija su parametru ir veiksmais
  7) let manoFunkcija = parametras => veiksmas su parametras; - arrow funkcija su parametru ir veiksmu

  Kas svarbiausia: () => {veiksmai}
*/

document.querySelector("#batuParduotuve > form").addEventListener("submit", e => {
  e.preventDefault();
  let tipas = e.target.elements.type.value;
  //tipas = tipas[0].toUpperCase() + tipas.slice(1, tipas.length);
  let dydis = e.target.elements.size.value;
  let spalva = e.target.elements.color.value;
  document.querySelector("#bootsOutput").innerHTML = `
    <h1> Ačiū, kad naudojatės mūsų paslaugomis! </h1>
    <div class="shoeDiv">
      <img src="./images/shoe.PNG" style="background-color:${spalva}">
      <span>Tipas: ${tipas}<br>Dydis: ${dydis}</span>
    </div>
  `;
  /*e.target.elements.type.value = null;
  e.target.elements.size.value = null;
  e.target.elements.color.value = null;*/
  document.querySelector("#batuParduotuve > form").reset();
});