class trueFalse {
  metodas1 = (skaicius) => {
    let atsakymas1 = (skaicius > 100 ? true : false)
    return atsakymas1
  }

  metodas2 = (zodis) => {
    let atsakymas2 = (zodis.charAt(0) === zodis.charAt(0).toLocaleUpperCase())
    return atsakymas2
  }

  metodas3 = (skaicius3) => {
    let atsakymas3 = (skaicius3 % 2 == 0 ? true : false)
    return atsakymas3
  }
  
  metodas4 = (zodis4) => {
    let atsakymas4 = (zodis4.length >= 8 ? true : false)
    return atsakymas4
  }
}
let klaustukas = new trueFalse();
console.log(klaustukas.metodas1(50));
console.log(klaustukas.metodas1(150));
console.log(klaustukas.metodas2("Labas rytas"));
console.log(klaustukas.metodas2("bye bye"));

let masyvas = new Array();
console.log(masyvas.push());