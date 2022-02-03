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

//          Paprasti kintamieji
let vardas = "Rokas";
let amzius = 25;
let alkanas = true;

console.log(vardas);
console.log(amzius);
console.log(alkanas);

//          Kitos reikšmės
/*
        1) Undefined - Neaprašytas / neegzistuojantis
        2) Null - Tuščias
        3) NaN - Ne skaičius (Not a Number)
*/

//             Konteineriai
let megstamiSerialai = ["Dr.House", "SuperNatural", 'Friends', "The Office"];

let codeAcademyGrupe = {
  pavadinimas : "TypeScript7",
  seniunas : "Tomašas Dudovičius",
  destytojas : "Rokas Banaitis",
  studentuKiekis : 20
};

console.log(megstamiSerialai);
console.log(megstamiSerialai[0]);
console.log(codeAcademyGrupe);
console.log(codeAcademyGrupe.pavadinimas);

//          Konteinerių nestinimas
// vieno konteinerio viduje kitas konteineris ir t.t.

let masyvasMasyve = ["reikšmės", 54, ["dar reikšmių", false], "kitkas", "Labas", true, ["masyvas ir vėl", ["dar giliau"]], 1];
console.log(masyvasMasyve);
console.log(masyvasMasyve[6][1][0]);

let objektasObjekte = {
  raktas1 : "Labas",
  raktas2 : "ate",
  gilusRaktas : {
    gilus1 : 54,
    gilus2 : 32,
    gilus3 : true,
    gilus4 : "haha",
    darGilesnis : {
      darDarDar : "me ded..."
    },
    gilus6 : "paprasčiau"
  },
  raktas4 : "labas vėl"
};
console.log(objektasObjekte);
console.log(objektasObjekte.gilusRaktas.darGilesnis.darDarDar);

let masinos = [
  {
    marke: "Audi",
    modelis : "TT",
    metai : 2010,
    spalva : "rgb(205, 0, 100)",
    naudota : true,
    duruSkaicius : 5,
    savininkai: [
      {
        vardas : "Petras",
        ikiKadaNaudojo : 2015
      },{
        vardas : "Kazys",
        ikiKadaNaudojo : 2018
      }
    ],
    explotacija: ["Vokietija", "Lenkija", "Lietuva", "Latvija"]
  },{
    marke: "BMW",
    modelis : "6",
    metai : 2010,
    spalva : "rgb(205, 0, 100)",
    naudota : false,
    duruSkaicius : 5,
    savininkai: [

    ],
    explotacija: []
  },{
    marke: "Fiat",
    modelis : "Punto",
    metai : 2001,
    spalva : "rgb(0, 0, 255)",
    naudota : true,
    duruSkaicius : 3,
    savininkai: [
      {
        vardas : "Petras",
        ikiKadaNaudojo : 2015
      },{
        vardas : "Kazys",
        ikiKadaNaudojo : 2018
      }
    ],
    explotacija: ["Vokietija", "Lenkija", "Lietuva"]
  }
];

console.log(masinos[0].explotacija[masinos[0].explotacija.length-1]);
/*let mE = masinos[0].explotacija;
console.log(mE[mE.length-1]);


let skMas = [5,8,4,6,1,6,51,5,8,4,61,1];

console.log(skMas[3],skMas[4],skMas[5],skMas[6]);

console.log(skMas[3]);
console.log(skMas[4]);
console.log(skMas[5]);
console.log(skMas[6]);*/

let stringas = "zodis";
let numberis = 54.6;
let booleanas = true;

let masyvai = ["nulintas", "pirmas", 2, 3, "ketvirtas", false, true, ["dar", 7], 
  {
    objMasyveReiksmePirma : "baisu",
    transportoPriemone : "Troleibusas",
    nelaimingasSkaicius : 2
}];
let objektai = {
  raktinisZodis : "reikšmė",
  laimingiSkaiciai : [7, 13, 66, 69, 96],
  gyvenamojiVieta : {
    planeta : "Žemė",
    zemynas : "Europa",
    salis : "Lietuva",
    miestas : "Kaunas",
    gatve : "Chicken street"
  }
};