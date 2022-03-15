console.groupCollapsed("Ciklai")
/* Ciklai */
for(let i = 0; i < 10; i++){
  console.log("Iteracijos skaičius: ", i);
}
console.log("------------------------------");
let random = Math.random()*5;
console.log("Random skaitmuo yra: ", random);
while(random > 1){
  random = Math.random()*5;
  console.log("Random skaitmuo yra: ", random);
}
console.log("------------------------------");
let sakinys = "For naudojamas kai įmanoma nesunkiai apskaičiuoti iteracijų skaičių.";
for(let i = 0; i < sakinys.length; i++){ // skirtas isvesti sakinį kas vieną simbolį
  console.log(sakinys[i]);
}
console.groupEnd();

/* Funkcijos */
function darykKazka(){
  console.log("Kažką darau...");
}
darykKazka();
console.log("------------------------------");
function sakykKazka(kaSakyti){
  console.log("Man buvo liepta pasakyti:", kaSakyti);
}
let tekstas = "Labas rytas.";
sakykKazka(tekstas);
sakykKazka("ate");
sakykKazka("buvo skanu");
sakykKazka("viso gero");
console.log("------------------------------");
function isvestiKasKelintaRaideIsParagrafo(kasKelinta, paragrafas){
  for(let i = 0; i < paragrafas.length; i=i+kasKelinta){
    console.log(paragrafas[i]);
  }
}
let daugTeksto = "Funkcija - tai perpanaudojamas kodo gabaliukas. Funkcija pati nieko nedaro, kol nėra iškviečiama. Funkcija gali priimti kažkokius duomenis, su kuriais atliks veiksmus ir tie duomenys yra vadinami parametrais.";
isvestiKasKelintaRaideIsParagrafo(6, daugTeksto);
console.log("---------");
isvestiKasKelintaRaideIsParagrafo(26, daugTeksto);
console.log("---------");
isvestiKasKelintaRaideIsParagrafo(10, sakinys);
console.log("------------------------------");
function grazinuSuma(skaicius1, skaicius2){
  /*let suma = skaicius1+skaicius2;
  return suma;*/
  return skaicius1+skaicius2;
}
console.log(grazinuSuma(5, 4));
let funkcijaGrazino = grazinuSuma(9, 12);
console.log(funkcijaGrazino);

/* Dainiaus klausimui */
/*function grazintiMasyvoSuKasKelintaRaideIsParagrafo(kasKelinta, paragrafas){
  let masyvasKuriGrazinsiu = [];
  for(let i = 0; i < paragrafas.length; i=i+kasKelinta){
    masyvasKuriGrazinsiu.push(paragrafas[i]);
  }
  return masyvasKuriGrazinsiu;
}
console.log(grazintiMasyvoSuKasKelintaRaideIsParagrafo(5, sakinys));*/

/*function funkcijosVardas0(par1, par2, par3){
  let atsakymas = par1*par2+par3;
  return atsakymas;
};
funkcijosVardas0(5,4,6); // 26

let funkcijosVardas1 = (par1, par2, par3) => par1*par2+par3;
funkcijosVardas1(5,4,6); // 26
let funkcijosVardas2 = par => par*5;
funkcijosVardas2(10); // 50*/