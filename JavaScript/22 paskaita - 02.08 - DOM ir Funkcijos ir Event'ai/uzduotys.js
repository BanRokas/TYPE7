function uzd1(name){
  alert(name);
}

function uzd2(){
  return Math.ceil(Math.random()*5); 
  //return Math.floor(Math.random() * (6-1)) + 1;
}

// Math.random() => 0.000001 -> 0.999999
// Math.random()*4 => 0.000001*4 -> 0.999999*4 => 0.000004 -> 3.999996
// Math.floor() - grindys  - apvalina į žemesnį skaičių
// Math.ceil() - ceiling - lubos - apvalina į aukštesnį skaičių
// Math.round() - apvalinti - apvalina į didesnį arba mažesnį priklausomai nuo skaičiaus
// Math.round(0.01 -> 0.49) -> 0; Math.round(0.50 -> 1.49) -> 1; Math.round(1.50 -> 1.99) -> 2

function uzd3(vard, pav){
  //return (vard+pav).length;
  //return vard.length + pav.length;
  return vard.concat(pav).length;
}
/*let vardas = "Rokas";
let pavarde = "Banaitis";
console.log( uzd3("Rokas","Banaitis") );
console.log( uzd3("Rokas",pavarde) );
console.log( uzd3(vardas,pavarde) );*/

let abecele = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function uzd4(nr){
  /*if(nr <= 0 || nr > abecele.length){
    return "Nėra tokio numerio abecelės raidės."
  } else */return abecele[nr/*-1*/];
}

function uzd5(nr1, nr2, operacija){
  if(operacija === "suma"){
    return nr1+nr2;
  } else if(operacija === "atimtis"){
    return nr1-nr2;
  } else if(operacija === "daugyba"){
    return nr1*nr2;
  } else if(operacija === "dalyba"){
    return nr1/nr2;
  } else {
    return "error";
  }
}

function uzd6_1(){
  return Math.ceil(Math.random()*10);
}
function uzd6_2(){
  return uzd6_1() ** 2;
}

