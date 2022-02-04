//                Aritmetika
console.groupCollapsed("Aritmetika");
console.groupCollapsed("Su string'ais");
//   string + string
let tekstas1 = "Šešios žąsys su šešiais žąsyčiais";
let tekstas2 = "ėjo keliu į 'Kentucky Fried Chicken' užkandinę.";

console.log(tekstas1);
console.log(tekstas2);
console.log("-------");
console.log(tekstas1, tekstas2);
let sakinys = tekstas1 + " " + tekstas2;
console.log(sakinys);

//    string + number
let skaicius1 = 1;
let skaiciusIrTekstas = skaicius1 + ") " + tekstas1 + ".";
console.log(skaiciusIrTekstas);
let neSkaicius = "82";
console.log(neSkaicius + skaicius1);

// string(number) - string(number) + string(number)
console.log(14 + 15 + "15");
console.groupEnd();

//  Actual aritmetika
console.groupCollapsed("Su number'iais");
let x = 7; //Number(prompt("Įveskite x"));
let y = 3; //Number(prompt("Įveskite y"));
console.log("x: " + x + " y: " + y);

let suma = x + y;
console.log("x + y = " + suma);
//console.log("x + y = " + (x + y));

let atimtis = x - y;
console.log("x - y = " + atimtis);

let daugyba = x * y;
console.log("x * y = " + daugyba.toFixed(2));

let dalyba = x / y;
console.log("x / y = " + dalyba.toFixed(2));

let likutis = x % y;
console.log("Liekana dalijant x iš y: " + likutis);

let laipsnis = x ** y;
let laipsnis2 = Math.pow(x, y);
console.log("x pakėlus y laipsniu gauname " + laipsnis);

let saknis = x ** (1/y);
let saknis2 = Math.pow(x, 1/y);
console.log("Iš x traukiant y laipsnio šaknį gauname " + saknis);
console.groupEnd();

// Artimetikos trumpiniai
console.groupCollapsed("Trumpiniai");
let i = 0;
console.log(i);

i = i + x; // padidina skaitmeniu
console.log(i);
i += x; // padidina skaitmeniu
console.log(i);
//sk1 = sk1 + sk2; yra tas pats kas sk1 += sk2;
i = i - x; // sumažina skaitmeniu
console.log(i);
i -= x; // sumažina skaitmeniu
console.log(i);
i = i * x;  i *= x;
console.log(i);
i = i / x;  i /= x;
console.log(i);
i = i % x;  i %= x;
console.log(i);

i--; // sumažina vienetu
--i;
console.log(i);
i++; // padidina vienetu
++i;
console.log(i);
console.groupEnd();
console.groupEnd();

//console.groupCollapsed("Sąlygos");
/*    Truthy and Falsy
    Truthy: true, skaičius kuris yra ne 0, "netuščias", objektas, masyvas, funkcija
    Falsy:  false, 0, "", NaN, undefined, null
*/
console.groupCollapsed("Palyginimo operatoriai");
let sk1 = 5; let sk2 = 5; let sk3 = 8; let zod1 = "5";
console.log("sk1: " + sk1 + "; sk2: " + sk2 + "; sk3: " + sk3 + "; zod1: '" + zod1 + "'");
console.log("ar sk1 lygus sk2: ", sk1 == sk2); // == tikrina ar lygios reikšmės
console.log("ar sk1 nelygus sk2: ", sk1 != sk2); // != tikrina ar nelygios reikšmės
console.log("ar sk1 lygus zod1: ", sk1 == zod1); // == tikrina ar lygios reikšmės
console.log("ar sk1 lyyygus zod1: ", sk1 === zod1); // === tikrina ar lygios reikšmės ir tipai
console.log("ar sk1 lyyygus zod1: ", sk1 !== zod1); // !== tikrina ar nelygios reikšmės ir tipai
console.log("ar sk1 daugiau nei sk2: ", sk1 > sk2); // > tikrina ar pirmasis daugiau už antrąjį
console.log("ar sk1 mažiau nei sk3: ", sk1 < sk3); // < tikrina ar pirmasis mažiau už antrąjį
console.log("ar sk1 daugiau arba lygus sk2: ", sk1 >= sk2); // > tikrina ar pirmasis daugiau arba lygus antrąjam
console.log("ar sk1 mažiau arba lygus sk3: ", sk1 <= sk3); // > tikrina ar pirmasis mažiau arba lygus antrąjam
console.groupEnd();
console.groupCollapsed("Palyginimo operandai");
// && - AND - IR
// || - OR  - ARBA
// !  - NOT - NE
let tiesa = true; let melas = false;
console.log(tiesa);
console.log(melas);
console.log("tiesa ir melas",tiesa && melas); // false
console.log("tiesa ir tiesa",tiesa && tiesa); // true
console.log("melas ir melas",melas && melas); // false
console.log("tiesa arba melas",tiesa || melas); // true
console.log("tiesa arba tiesa",tiesa || tiesa); // true
console.log("melas arba melas",melas || melas); // false
console.log("NE melas ir melas", !(melas && melas)); // true
console.log("NE tiesa arba melas",!(tiesa || melas)); // false
console.groupEnd();

console.groupCollapsed("Sąlygos");
if("salyga"){
  "jeigu salyga tiesa - vygdo IF'o vidini kodą"
}
"jeigu salyga yra melas - eina kodu toliau"

if("salyga"){
  "jeigu salyga tiesa - vygdo IF'o vidini kodą"
} else {
  "jeigu salyga yra melas - vygdo else'o vidinį kodą"
}

if("salyga1"){
  "jeigu salyga1 tiesa - vygdo IF'o vidini kodą"
} else if("salyga2") {
  "jeigu salyga2 tiesa, o sąlyga1 netiesa - vygdo IF'o(antro) vidini kodą"
} else if("salyga3") {
  "jeigu salyga3 tiesa, o salyga2 ir salyga1 netiesa - vygdo IF'o(trečio) vidini kodą"
} else {
  "jeigu visos salygos yra melas - vygdo else'o vidinį kodą"
}

let pilnametyste = 18;
let paauglyste = 13;
let vaikyste = 7;
let amzius = prompt("Koks tavo amžius?");
if(amzius >= pilnametyste){
  //alert("Esi pilnametis!");
  //console.log("Esi pilnametis!");
  if(amzius > 18 && amzius < 20){
    console.log("Negali net alaus pirkti... yikes...");
  } else if(amzius >= 20 && amzius < 30){
    console.log("Esi savo trečiajame dešimtmetyje (geriausi metai tbh).");
  }
} else if(amzius >= paauglyste){
  console.log("Esi paauglys.");
} else if(amzius >= vaikyste){
  console.log("Esi vaikas.");
  let mokykla = prompt("Ar jau eini į mokyklą? (Taip/Ne)");
  if(mokykla == "Taip"){
    console.log("Smagaus mokyklinio gyvenimo.");
  } else if(mokykla == "Ne") {
    console.log("Jau greitai reiks keliauti į mokyklą.");
  } else {
    console.log("Prašau parašyti Taip arba Ne");
  }
} else {
  console.log("Esi jaunesnis negu 7 metai.");
}
console.log("vygdosi kodas toliau");

let skaicius = 5;
if(skaicius >= 8){
  console.log("8 - 99999999");
} else /*if(skaicius < 8)*/{
  console.log("-9999999 - 8");
}

let spalva = "  Mėlyna";//prompt("Kokia tavo mėgstamiausia spalva?");
spalva = spalva.trim(); // string metodas, kuris iš abiejų pusių ištrina tarpus
spalva = spalva.toLowerCase(); // string metodas, kuris sumažina visas raides
if(spalva == "raudona"){
  console.log("Raudona it rožės žiedlapis.");
} else if(spalva == "mėlyna"){
  console.log("Mėlyna kaip jūrų platybės.");
}
console.groupEnd();

console.groupCollapsed("Tikrinimasis");
if(amzius >= 18){
  console.log("Tu jau esi pilnametis.");
  let teises = prompt("Ar jau išsilaikei automobilio teises? (Taip/Ne)");
  if(teises == "Taip"){
    let arTuriMasina = prompt("Ar turi automobilį? (Taip/Ne)");
    if(arTuriMasina == "Taip"){
      console.log("Sėks ir važiuok.");
    } else if(arTuriMasina == "Ne"){
      console.log("Tai taupykis arba prašyk tėvų.");
    } else {
      console.log("Prašome įvesti Taip arba Ne");
    }
  } else if (teises == "Ne"){
    console.log("Negali vairuoti");
  } else {
    console.log("Prašome įvesti Taip arba Ne");
  }
} else {
  console.log("Nesi pilnametis negali vairuot");
}
console.groupEnd();

console.groupCollapsed("Tikrinimasis");
let asmuo = {
  vardas : prompt("Koks jūsų vardas?"),
  pavarde : prompt("Kokia jūsų pavardė?"),
  amzius : amzius,
  lytis : prompt("Kokia jūsų lytis?")
}
if(asmuo.lytis == "Vyras"){
  console.log("Niekada nesubresi CHA CHA");
} else if(asmuo.lytis == "Moteris"){
  console.log("Moteris");
} else {
  console.log("Welcome to 21'st century");
}
console.groupEnd();

//console.groupEnd();