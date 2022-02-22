/*
  FindIndex
*/
console.groupCollapsed("Find Index užduotys");
let masyvas1 = [4,5,6,46,1,64,6,13,513,549,81,91,32,16,1,651];
let masyvasStr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Recusandae', 'quibusdam', 'esse', 'quas', 'eligendi', 'officia', 'hic', 'asperiores', 'sunt', 'sed', 'inventore', 'voluptate', 'dignissimos,', 'commodi,', 'laudantium', 'ad', 'eum', 'excepturi', 'nam', 'incidunt', 'mollitia', 'ipsum?'];
let findIndex1 = (mas, didesnisUz) => {
  return mas.findIndex(elementas => elementas > didesnisUz);
}
console.log("Didesnis negu 70 skaičius masyve yra:",findIndex1(masyvas1, 70), "pozicijoje.");

let findIndex2 = (mas, mazesnisUz) =>
  mas.findIndex(elementas => elementas < mazesnisUz);
console.log("Mažesnis negu 3 skaičius masyve yra:",findIndex2(masyvas1, 3), "pozicijoje.");

let findIndex3 = (mas) => {
  return mas.findIndex(zodis => zodis[0] === zodis[0].toLowerCase());
}
console.log("Pirmasis žodis prasidedantis mažąja raide masyve yra:",findIndex3(masyvasStr),"pozicijoje.");

let findIndex4 = (mas) => {
  return mas.findIndex(zodis => zodis[0] === zodis[0].toUpperCase());
}
console.log("Pirmasis žodis prasidedantis didžiąja raide masyve yra:",findIndex4(masyvasStr),"pozicijoje.");

let findIndex5 = (mas, didesnisUz, mazesnisUz) => {
  return mas.findIndex(skaicius => skaicius > didesnisUz && skaicius < mazesnisUz)
}
console.log("Pirmasis skaičius didesnis už 10, bet mažesnis už 25 masyve yra:",findIndex5(masyvas1, 10, 25),"pozicijoje.");

let findIndex6 = (mas, didMaz, ilgesnisUz, trumpesnisUz) => {
  return mas.findIndex(zodis => {
    if(zodis.length > ilgesnisUz && zodis.length < trumpesnisUz){
      return didMaz ? zodis[0] === zodis[0].toUpperCase() : zodis[0] === zodis[0].toLowerCase();
      /*if(didMaz === true){
        return zodis[0] === zodis[0].toUpperCase();
      } else {
        return zodis[0] === zodis[0].toLowerCase();
      }*/
    }
  });
}
console.log("Pirmasis žodis prasidedantis didžiąja raide ir yra ilgenis už 5, bet trumpesnis už 15 masyve yra:",findIndex6(masyvasStr, true, 5, 15),"pozicijoje.");
console.groupEnd();

