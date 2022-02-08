console.groupCollapsed("DOM");
const PAV = document.querySelector("#pirmas"); // ieškant pagal id - rašome groteles (#)
console.dir(PAV);
const TEKST = document.querySelectorAll(".tekst"); // ieškant pagal klasę - rašome tašką (.)
console.dir(TEKST);
const PAR = document.querySelectorAll("p"); // ieškant pagal tag'o vardą - rašome tag'o vardą
console.dir(PAR);

PAV.innerHTML += "rytas.";
TEKST[1].innerHTML = "Labai gražus rytas šiandieną :)";

const DD = document.querySelector("#dienosDarbai");
const papildomiDarbai = [
  {
    id : 1,
    darboPavadinimas : "Išsivalyti dantis."
  },{
    id : 2,
    darboPavadinimas : "Pasiruošti darbui."
  },{
    id : 3,
    darboPavadinimas : "Dirbti"
  },{
    id : 4,
    darboPavadinimas : "Valgyti"
  },{
    id : 5,
    darboPavadinimas : "Vėl dirbti"
  },{
    id : 6,
    darboPavadinimas : "Vėl valgyti"
  },{
    id : 7,
    darboPavadinimas : "Ir vėl dirbti"
  }
];
console.dir(DD);


/* 
  + reikės ciklo pagalbos
    su kiekvienu ciklu kažkokį html kodą pridėti į dienos darbus
      "
        <div class="darbas">
          <span>skaičius)</span>
          <span>darboPavadinimas</span>
        </div>
      "
      skaičius = kiek elementų yra DD + 1
      darboPavadinimas = papildomiDarbai[i].darboPavadinimas
*/

/*for(let i = 0; i < papildomiDarbai.length; i++){
  DD.innerHTML += `
    <div class="darbas">
      <span>${DD.childElementCount+1})</span>
      <span>${papildomiDarbai[i].darboPavadinimas}</span>
    </div>
  `;
}*/

console.groupEnd();


/* Funkcijos */
/*
  function funkcijosVardasSugalvotasKazkoks(){
    // veiksmai
  }
  funkcijosVardasSugalvotasKazkoks();
  1) Funkcijos yra perpanaudojamo kodo gabalai, į kuriuos galime kreiptis kiek norime kartų.
  2) Tam, kad funkcijos kažką darytų - reikia į jas kreiptis.

  function funkcijosVardasSugalvotasKazkoks(parametraiArbaDuomenysKuriuosPriimaFunkcija){
    // veiksmai su parametraiArbaDuomenysKuriuosPriimaFunkcija
  }
  3) Funkcijos gali priimti kažkokius parametrus (duomenis) ir su jais atlikti kažkokius veiksmus.

  function funkcijosVardasSugalvotasKazkoks(parametraiArbaDuomenysKuriuosPriimaFunkcija){
    return parametraiArbaDuomenysKuriuosPriimaFunkcija+veiksmai;
  }
  4) Funkcija (beveik) visada grąžina kažkokį rezultatą atlikus veiksmus su duotaisiais parametrais.
*/
function vardas(parametras){
  return parametras+5;
}
let funkcijosAtsakymas = vardas("Skaičius: ");

function suma(par1, par2){
  let atsakymas = par1 + par2;
  return atsakymas;
}
console.log("Suma",suma(4,5));

function izambine(par1, par2){
  //let atsakymas = (stat1**2 + stat2**2)**(1/2); // Math.sqrt(stat1**2+stat2**2)
  return (par1**2 + par2**2)**(1/2);
}
console.log("Įžambinė",izambine(4,3));

const masyvas = [];
for(let i = 0; i < 20; i++){
  masyvas.push(i);
}

function doubleTheValues(masyvasPar){
  let masyvasGrazinti = [];
  for(let i = 0; i < masyvasPar.length; i++){
    masyvasGrazinti.push(masyvasPar[i]*2);
  }
  return masyvasGrazinti;
}

let dvigubaiDidesnisMasyvas = doubleTheValues(masyvas);
let dvigubasKitoksMasyvas = doubleTheValues([5,8,9,12]);

/* EVENTS */
document.querySelector(".darbuSarasas").addEventListener("mouseenter", extendList);
function extendList(){
  for(let i = 0; i < papildomiDarbai.length; i++){
    DD.innerHTML += `
      <div class="darbas">
        <span>${DD.childElementCount+1})</span>
        <span>${papildomiDarbai[i].darboPavadinimas}</span>
      </div>
    `;
  }
}