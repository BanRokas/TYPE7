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

for(let i = 0; i < papildomiDarbai.length; i++){
  DD.innerHTML += `
    <div class="darbas">
      <span>${DD.childElementCount+1})</span>
      <span>${papildomiDarbai[i].darboPavadinimas}</span>
    </div>
  `;
}