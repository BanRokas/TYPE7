let asmuo1 = {
  vardas : "Rokas",
  pavarde : "Banaitis",
  pareigos : "dėstytojas"
}
let asmuo2 = {
  vardas : "Arnoldas",
  pavarde : "Matijošius",
  pareigos : "studentas"
}
let asmuo3 = {
  vardas : "Benediktas",
  pavarde : "Kertenis",
  pareigos : "studentas"
}
let asmuo4 = {
  vardas : "Daimonas",
  pavarde : "Ušackas",
  pareigos : "studentas"
}

let grupe0 = [
  {
    vardas : "Rokas",
    pavarde : "Banaitis",
    pareigos : "dėstytojas"
  },{
    vardas : "Arnoldas",
    pavarde : "Matijošius",
    pareigos : "studentas"
  },{
    vardas : "Benediktas",
    pavarde : "Kertenis",
    pareigos : "studentas"
  },{
    vardas : "Daimonas",
    pavarde : "Ušackas",
    pareigos : "studentas"
  }
];

let asmensKurimoFunkcija0 = (vard, pav, par) => {
  return ({
    vardas : vard,
    pavarde : pav,
    pareigos : par
  })
}
function AsmensKurimoFunkcija1(vard, pav, par){
  this.vardas = vard;
  this.pavarde = pav;
  this.pareigos = par;
}
let grupe1 = [
  asmensKurimoFunkcija0("Rokas", "Banaitis", "dėstytojas"),
  asmensKurimoFunkcija0("Arnoldas", "Matijošius", "studentas"),
  new AsmensKurimoFunkcija1("Benediktas", "Kertenis", "studentas"),
  new AsmensKurimoFunkcija1("Daimonas", "Ušackas", "studentas")
];

class AsmensKurimoKlase{ // taisyklingiausias
  constructor(vard, pav, par){
    this.vardas = vard;
    this.pavarde = pav;
    this.pareigos = par;
  }
}
let grupeTeisingai = [
  new AsmensKurimoKlase("Rokas", "Banaitis", "dėstytojas"),
  new AsmensKurimoKlase("Arnoldas", "Matijošius", "studentas"),
  new AsmensKurimoKlase("Benediktas", "Kertenis", "studentas"),
  new AsmensKurimoKlase("Daimonas", "Ušackas", "studentas"),
  new AsmensKurimoKlase("Dainius", "Dargus", "studentas"),
  new AsmensKurimoKlase("Dainius", "Remeika", "studentas")
];

class Masina{
  constructor(
    marke,
    modelis,
    gamybosMetai,
    kuroTipas,
    kebuloTipas,
    kubatura,
    spalva,
    duruSkaicius,
    autonominisVairavimas,
    odinesSedynes
  ){
    this.marke = marke;
    this.modelis = modelis;
    this.gamybosMetai = gamybosMetai;
    this.kuroTipas = kuroTipas;
    this.kebuloTipas = kebuloTipas;
    this.kubatura = kubatura;
    this.spalva = spalva;
    this.duruSkaicius = duruSkaicius;
    this.autonominisVairavimas = autonominisVairavimas;
    this.odinesSedynes = odinesSedynes;
  }
}

const masinos = [
  new Masina("Audi", "TT", 2000, "dyzelinas", "hečbekas", 54, "raudona", 2, false, true),
  new Masina("BMW", "A6", 2015, "benzinas", "sedanas", 120, "juoda", 4, true, true),
  new Masina("Honda", "Civic", 1996, "dyzelinas", "hečbekas", 80, "pilka", 4, false, false),
  new Masina("Fiat", "Punto", 2001, "benzinas", "hečbekas", 59, "raudona", 2, false, false)
];

console.log(masinos);
console.log(masinos.filter(masina => masina.odinesSedynes));
console.log(masinos.reduce((prev,curr)=>prev+curr.gamybosMetai, 0) / masinos.length);
console.log(masinos.some(masina => masina.spalva === "raudona"));
console.log(masinos.findIndex(masina => masina.spalva === "raudona"));
console.log(masinos.splice(masinos.findIndex(masina => masina.spalva === "raudona"),1));

masinos.push(new Masina("Toyota", "Auris", 2000, "benzinas", "sedanas", 666, "raudona", 4, false, true));
console.log(masinos);