let masyvas = [];
for (let i = 0; i < 985; i += 65) {
  masyvas.push(Math.floor(i * Math.random()));
}
console.log(masyvas);

// push - įdeda elementa į masyvo galą
// unshift - įdeda elementa į masyvo pradžią

// pop - išima elementą iš masyvo galo ir jį grąžina
// shift - išima elementa iš masyvo pradžios ir jį grąžina

/*while(masyvas.length > 0){ // kol masyvas nėra tuščias
  console.log(masyvas.pop());
}*/
/*for(let i = masyvas.length; i > 0; i--){
  console.log(masyvas.pop());
}*/
let masyvoSuma = 0;
for (let i = 0; i < masyvas.length; i++) {
  masyvoSuma += masyvas[i];
}
console.log(masyvoSuma);
while (masyvoSuma > 1000) {
  masyvoSuma -= masyvas.shift();
}
/*let masyvoIlgis = masyvas.length;
for(let i = 0; i < masyvoIlgis; i++){
  masyvoSuma -= masyvas.shift();
  if(masyvoSuma < 1000){
    break;
  }
}*/
console.log(masyvas, masyvoSuma);

let laimi = 1;
switch (laimi) {
  case 1:
    console.log("auto");
    break;
  case 2:
  case 3:
  case 4:
    console.log("tele");
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    console.log("2eur");
    break;
  default:
    console.log("nieko");
}


/* DOM - Document Object Model */

let infoTag = document.getElementsByTagName("h1");
let infoClass = document.getElementsByClassName("classVardas");
let infoID = document.getElementById("idVardas");
console.log(infoClass, infoID, infoTag);

let infoTagN = document.querySelector("h1");
console.dir(infoTagN);
console.log(infoTagN);
let infoClassN = document.querySelector(".h1");
let infoIdN = document.querySelector("#h1");