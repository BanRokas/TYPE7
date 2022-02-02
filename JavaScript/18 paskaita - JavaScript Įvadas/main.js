console.log("Ate :) ");
console.log("---------------");
/*    Kintamieji
  A) Tipai:
    1) Skaitinis - Number | Integer/Int | Float
      5, 54.1, -564, 2/3
    2) Tekstinis - String | Char
      "dvigubos", 'viengubos', `backtick`
    3) Loginis   - Boolean | Bool
      true, false | truthy, falsy

  B) Konteineriai:
    1) Masyvas  - Array
      [54, false, "true", "3", "tekstas", [87, 65, true]]
    2) Objektas - Object
      {
        rakto:"informacijos",
        naujasRaktas:"naujaInfo",
        objektoRaktas:{
          vidinisRaktas:"vidineInfo"
        }
      }

  C) Sukūrimo būdai:
    1) var   - kintamasis (variable)
      var kintamojoVardas = "Kintamasis";
    2) let   - kintamasis
      let kintamasis = true;
    3) const - konstanta (constant)
      const PI = 3.14;

*/

/*let tekstas = 'Mano mėgstamiausias serialas yra "Friends".';*/

let vardas = "Rokas";
let amzius = 25;
let alkanas = true;

let megstamiSerialai = ["Dr.House", "SuperNatural", 'Friends', "The Office"];

let codeAcademyGrupe = {
  pavadinimas : "TypeScript7",
  seniunas : "Tomašas Dudovičius",
  destytojas : "Rokas Banaitis",
  studentuKiekis : 20
};

console.log(vardas);
console.log(amzius);
console.log(alkanas);

console.log(megstamiSerialai);
console.log(megstamiSerialai[0]);
console.log(codeAcademyGrupe);
console.log(codeAcademyGrupe.pavadinimas);