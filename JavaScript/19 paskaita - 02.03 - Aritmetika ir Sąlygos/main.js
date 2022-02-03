//                Aritmetika
console.groupCollapsed("Aritmetika su string'ais");
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
console.groupCollapsed("Aritmetika su number'iais");
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
console.groupCollapsed("Aritmetikos trumpiniai");
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