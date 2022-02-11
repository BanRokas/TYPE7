/*
Pvz:
Įvesta: 2
Rezultatas:
*
* *

Įvesta: 5
Rezultatas:
*
* *
* * *
* * * *
* * * * *

*/

document
  .querySelector("#duokTrik")
  .addEventListener("click", e => {
    let duomenys = e.path[1].children.trikIvest.value;
    let isvestis = e.path[1].children.trikOutput;
    isvestis.innerHTML = "";
    let kiek = "";
    for(let i = 1; i <= duomenys; i++){
      kiek += "* ";
      isvestis.innerHTML += `
        <p style="margin:0">${kiek}</p>
      `;
    }
  });