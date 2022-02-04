console.groupCollapsed("Sąlygos");
// switch
let vaisius = "Obuolys";
switch (vaisius) {
  case "Obuolys":
  case "Kriaušė":
    console.log("Lietuviškas vaisius.");
    break;
  case "Dragon Fruit":
  case "Papaya":
  case "Kiwi":
    console.log("Tropinis vaisius.");
    break;
  default:
    console.log("Neradome");
}

/*if(vaisius == "Obuolys" || vaisius == "Kriaušė"){
  console.log("Lietuviškas vaisius.");
} else if(vaisius == "Dragon Fruit" || vaisius == "Papaya" || vaisius == "Kiwi"){
  console.log("Tropinis vaisius.");
} else {
  console.log("Neradome");
}*/
console.log("-----------------");
// ternary
let salyga = true;
if (salyga) {
  console.log("if tiesa")
} else {
  console.log("if melas")
}
salyga ? console.log("ter tiesa") : console.log("ter melas"); // ternary su if ir else

console.log("-------");

let skaicius = 100;

if (skaicius < 10) {
  console.log("Mažai");
} else if (skaicius < 25) {
  console.log("Vidutiniškai");
} else if (skaicius < 100) {
  console.log("Daug");
} else {
  console.log("Labai daug");
}

skaicius < 10 ? console.log("Mažai") :
skaicius < 25 ? console.log("Vidutiniškai") :
skaicius < 100 ? console.log("Daug") : console.log("Labai daug");

console.groupEnd();
// Ciklai

/*
  Ciklai skirti atkartoti kažkokią veiksmų seką kažkokį tais kiekį kartų.
    1) for(){} - žinai / galiApskaičiuoti kiek kartų reikės vykdyti ciklą.
        for(1;2;3){veiksmai} 1-SukuriamasSkaitliukas; 2-Sąlyga; 3-SąlygosKitimas
      array.forEach() - naudojamas masyvui
      for in - naudojamas objektui
      for of - naudojamas objektui
    2) while(){} - nežinai kiek kartų reikės vykdyti ciklą.
        while(1){veiksmai} 1-Sąlyga
      do{}while() - nežinai kiek kartų reikės vykdyti ciklą, bet atlieki veiksmą bent vieną kartą.
*/
for(let i = 0; i < 5; i++){ // i++ <= i += 1 <= i = i + 1
  console.log(i);
}

let masyvas = [];
for(let i = 0; i < 9854; i+= 65){
  masyvas.push(Math.floor(i*Math.random()));
}

for(let i = 0; i < masyvas.length; i++){
  //console.log(masyvas[i] + ' yra masyvo "masyvas" ' + i + "'asis elementas.");
  console.log(`${masyvas[i]} yra masyvo "masyvas" ${i}'asis elementas.`);
}