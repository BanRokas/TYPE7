/*
  Boolean metodai:
    bool.toString(); - paverčia boolean reikšmes (true|false) į string reikšmes ("true"|"false")
*/

let boolas = false;
console.log(boolas, boolas.toString());

/*
  Number properties:
  Number.
         MAX_VALUE
         MIN_VALUE
         MAX_SAFE_INTEGER
         MIN_SAFE_INTEGER
         POSITIVE_INFINITY
         NEGATIVE_INFINITY

  Number metodai:
    parseFloat(reikšmė); - grąžina reikšmę kaip realųjį skaičių
    parseInt(reikšmė); - grąžina reikšmę kaip sveikąjį skaičių
    skaicius.toFixed(kiek); - grąžina skaicius kaip String kintamąjį su kiek skaitmenų po kablelio ir suapvalina.
    skaicius.toPrecision(kiek); - grąžina skaicius kaip String kintamąjį su kiek skaitmenu po pirmojo skaitmens, kuris nėra 0
    skaicius.toString(); - grąžina skaicius kaip string kintamąjį
*/

let skaiciusZodziais = "000654321.0000987654";
let skaicius = 654321.000987;
console.log(skaiciusZodziais);
console.log("parseFloat",parseFloat(skaiciusZodziais));
console.log("parseInt",parseInt(skaiciusZodziais));
console.log(skaicius);
console.log("toFixed(3)",skaicius.toFixed(3));
console.log("toPrecision(3)",skaicius.toPrecision(3));
console.log("toString",skaicius.toString());

/*
  String metodai:
    zodis.trim(), zodis.trimStart(), zodis.trimEnd() - ištrina tarpus pradžioje|gale zodis kintamojo.
    zodis.toLowerCase(), zodis.toUpperCase() - grąžina zodis reikšmę visomis mažosiomis | didžiosiomis raidėmis.
    zodis.charAt(kur) - grąžina zodis kur vietoje esančią raidę.
    zodis.endsWith(tekstas), zodis.startsWith(tekstas) - grąžina true jeigu zodis baigiasi|prasideda tekstas reikšme.
    zodis.includes(tekstas) - grąžina true jeigu zodis viduje yra tekstas reikšmė.
    zodis.indexOf(tekstas), zodis.lastIndexOf(tekstas) - grąžina poziciją, kurioje randa pirmąjį|paskutinįjį tekstas atitikmenį zodis kintamajame.
    zodis.replace(ka, iKa), zodis.replaceAll(ka, iKa) - grąžina naują string'ą, kuriame pakeistaPirma|pakeistosVisos ka reikšmė/s į iKa reikšmę/es.
    zodis.repeat(kiek) - grąžina naują string'ą, kuriame zodis reikšmė yra atkartota kiek kartų.
    zodis.slice(from, to), zodis.substring(from, to) - grąžina naują string'ą, kuriame yra zodis simboliai nuo from iki to pozicijos.
    zodis.split(kaip) - grąžina masyvą, kuriame yra string reikšmės, kurias skyrė kaip nustatymas.
    zodis.concat(apjungimas,kitasZodis) - grąžina string'ą, kuriame yra prie zodis prijungtas kitasZodis ir tarp jų yra apjungimas
*/

"   labas   ".trim(); // "labas"
"labas".charAt(2); // "b" 
"labas rytas".endsWith("ytas"); // true
"Labas rytas Lietuva!".include("rytas L"); // true
"labas rytas".indexOf("a"); // 1
"labas rytas".replaceAll("a", "c"); // "lcbcs rytcs"
"as ".repeat(3); // "as as as "
"labas rytas".slice(3, 8); // "as ry"
"labas rytas".split("a"); // ["l","b","s ryt", "s"]
"labas".concat(" ", "rytas"); // "labas rytas"