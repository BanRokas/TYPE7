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

console.groupCollapsed("Funkcijos");
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
console.groupEnd();

/* Array Metodai */

let skaiciuMasyvas = [5,4,0,3,1,5,0,4,3,0,8,0,9,4,0,7,6,0];
// nenaudojant iteracinių masyvų metodų būdas nr1
let naikintiNuliusIsMasyvo = (masyvas) => {
  for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] === 0){
      masyvas.splice(i, 1);
      i--;
    }
  }
  return masyvas;
};
console.log(naikintiNuliusIsMasyvo(skaiciuMasyvas));

skaiciuMasyvas = [5,4,0,3,1,5,0,4,3,0,8,0,9,4,0,7,6,0];
// nenaudojant iteracinių masyvų metodų būdas nr2 (kiek geresnis)
let naikintiNuliusIsMasyvo1 = (masyvas) => {
  let masyvasKuriGrazinti = [];
  for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] !== 0){
      masyvasKuriGrazinti.push(masyvas[i]);
    }
  }
  return masyvasKuriGrazinti;
};
console.log(naikintiNuliusIsMasyvo1(skaiciuMasyvas));

// naudojant iteracinį masyvo metodą ir arrow funkciją vietoj callback
let naikintiNuliusIsMasyvo2 = (masyvas) => {
  return masyvas.filter(elementas => elementas !== 0);
}
console.log(naikintiNuliusIsMasyvo2(skaiciuMasyvas));

let tikrinamArNeNulis = (skaicius) => {
  return skaicius !== 0;
}
// naudojant iteracinį masyvo metodą su vienu callback
let naikintiNuliusIsMasyvo3 = (masyvas) => {
  return masyvas.filter(tikrinamArNeNulis);
}
console.log(naikintiNuliusIsMasyvo3(skaiciuMasyvas));

// naudojant iteracinį masyvo metodą su keliais callback
let naikintiNuliusIsMasyvo4 = (masyvas, callBack_as) => {
  return masyvas.filter(callBack_as);
}
console.log(naikintiNuliusIsMasyvo4(skaiciuMasyvas, tikrinamArNeNulis));


/* Async function */
// Promise:
function logFetchPromise(url) {
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      console.log(text);
    }).catch(err => {
      console.error('fetch failed', err);
    });
}
// Async:
async function logFetchAsync(url) {
  try {
    const response = await fetch(url);
    console.log(await response.text());
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}