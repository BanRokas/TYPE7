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
// || - OR - ARBA
// ! - NOT - NE
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


//console.groupEnd();