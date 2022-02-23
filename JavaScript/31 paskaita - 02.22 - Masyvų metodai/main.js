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

console.groupCollapsed("Map ir ForEach");

// --- task 1 ---
console.groupCollapsed(" --- task 1 ---");
let mas = [
  {id:0, name:"Cheezas", inStock:true, primeCost:0.3, cost:1},
  {id:1, name:"HesBorger", inStock:false, primeCost:0.1, cost:2.2},
  {id:2, name:"MacDac", inStock:true, primeCost:0.6, cost:1.6},
  {id:3, name:"Dešrainis", inStock:false, primeCost:0.53, cost:5.4},
  {id:4, name:"Burgeris", inStock:true, primeCost:0.34, cost:2},
  {id:5, name:"Kebabas", inStock:false, primeCost:0.65, cost:3},
  {id:6, name:"Cola 0.5", inStock:true, primeCost:0.1, cost:1},
  {id:7, name:"Fanta 0.5", inStock:true, primeCost:0.1, cost:1},
  {id:8, name:"Cola 0.2", inStock:true, primeCost:0.05, cost:0.7},
  {id:9, name:"Fanta 0.2", inStock:true, primeCost:0.05, cost:0.7},
  {id:10, name:"Sprite 0.2", inStock:false, primeCost:0.05, cost:0.7},
  {id:11, name:"Sprite 0.5", inStock:false, primeCost:0.1, cost:1}
];
console.log(mas);
console.groupEnd();

// --- task 2 ---
console.groupCollapsed(" --- task 2 ---");
  mas.forEach(item => console.log(item));
console.groupEnd();

// --- task 3 ---
console.groupCollapsed(" --- task 3 ---");
  mas.forEach(item => console.log(`Vardas: ${item.name}; Kaina: ${item.cost}€;`));
console.groupEnd();

//    --- task 4 ---
console.groupCollapsed(" --- task 4 ---");
  console.groupCollapsed(" --- task 4.0 ---");
    let mas4_0 = [];
    mas.forEach(item => { //item.inStock ? mas4_0.push(item) : null
      if(item.inStock === true){
        mas4_0.push(item);
      }
    });
    console.log(mas4_0);
  console.groupEnd();

  console.groupCollapsed(" --- task 4.1 ---");
    let mas4_1 = mas4_0.map(item => ({
      name: item.name,
      profit: (item.cost-item.primeCost).toFixed(2)
    }));
    console.log(mas4_1);
  console.groupEnd();

  console.groupCollapsed(" --- task 4.2 ---");
    let mas4_2_1 = [
      {
        name:"MacDac",
        amount:4
      }, {
        name:"Cola 0.2",
        amount:2
      }
    ];
    let mas4_2_2 = [{name:"Burgeris", amount:2}, {name:"Fanta 0.5", amount:2}];
    console.log(mas4_2_1);
    console.log(mas4_2_2);
  console.groupEnd();

  console.groupCollapsed(" --- task 4.3 ---");
    let pelnas = 0;
    let bendriUzsakymai = mas4_2_1.concat(mas4_2_2);
    bendriUzsakymai.forEach(uzsakymoItem => {
      mas4_1.forEach(menuItem => {
        if(menuItem.name === uzsakymoItem.name){
          //console.log(menuItem.profit * uzsakymoItem.amount);
          pelnas += menuItem.profit * uzsakymoItem.amount;
        }
      });
    });
    console.log("4.2 užduoties užsakymas/ai atnešė: " + pelnas + " pelno.");
  console.groupEnd();

  console.groupCollapsed(" --- task 4.4 ---");
    let bendra = 0;
    let cekis = [];
    bendriUzsakymai.forEach( uzsakymoItem => {
      mas4_0.forEach( menuItem =>{
        if( menuItem.name === uzsakymoItem.name ){
          bendra += uzsakymoItem.amount * menuItem.cost;
          cekis.push({
            name: uzsakymoItem.amount + " " + uzsakymoItem.name,
            price: uzsakymoItem.amount * menuItem.cost         
          });
        }
      });
    });
    cekis.push({bendraKaina: bendra});
    console.log(cekis);
  console.groupEnd();
console.groupEnd();



console.groupEnd();