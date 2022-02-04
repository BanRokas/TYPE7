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