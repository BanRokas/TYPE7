let masyvas = [1,2,3,4,5,6,7,8,9];

// 4) Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.
let [ , , , ...keturi] = masyvas;
console.log(keturi);


// 7+) Parašykite funkciją, kuri grąžins nuo 10 iki 20 kintamųjų masyvo pavidalu. Naudojant destruktūrizavimą priskirti pirmąjam kintamąjam pirmas 5 reikšmes, o antrąjam kintamąjam - likusias.

let randomFunkcija = (min, max) => {
  let kiek = Math.floor(Math.random()*(max-min+1)+min);
  const toReturn = [];
  for(let i = 0; i < kiek; i++){
    toReturn.push(Math.random().toFixed(2));
  }
  return toReturn;
}

let [a,b,c,d,e, ...antras] = randomFunkcija(10,20);
let pirmas = [a,b,c,d,e];