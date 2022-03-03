/*                          Ledainę                          */

/*console.log("Aš");
setTimeout(() => {
  console.log("valgau");
  
}, 2000);
console.log("ledus");*/

const sandelys = {
  vaisiai : ["braškės", "bananai", "apelsinai", "vynuogės", "mangai"],
  ledoPagrindai : ["vanduo", "ledas", "pienas"],
  ledoIndeliai : ["puodukas", "ragelis", "lazdelė"],
  priedai : ["riešutai", "karamelė", "likeris", "pabarstukai", "šokoladas"]
};
let parduotuveAtidaryta = true;
let valomasLeduAparatas = false;

//              async / await

let time = (ms) => {
  return new Promise( (resolve, reject) =>{
    if(parduotuveAtidaryta){
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Parduotuvė uždaryta. Ateik rytoj."));
    }
  });
}
/*async function produckija(){

}*/
let produkcija = async () =>{
  try {
    while(parduotuveAtidaryta && !valomasLeduAparatas){
      await time(2000);
      console.log(`Kviečiame produkciją. Perduodame jiems: ${sandelys.vaisiai[0]}, ${sandelys.ledoPagrindai[1]}, ${sandelys.ledoIndeliai[1]}, ${sandelys.priedai[4]}.`);
      await time(0);
      console.log(`Pradedame gaminti ledus su ${sandelys.vaisiai[0]}.`);
      await time(2000);
      console.log(`Susmulkiname ${sandelys.vaisiai[0]}.`);
      if(!valomasLeduAparatas){
        await time(5500);
        console.log(`Sudedame ${sandelys.ledoPagrindai[1]} į ledų aparatą ir laukiame kol pabaigs ruošti.`);
      } else {break}
      await time(3000);
      console.log(`Paimame ${sandelys.ledoPagrindai[1]} masę iš ledų aparato, sumaišome ją su susmulkintais ${sandelys.vaisiai[0]} ir sudedame mišinį į ${sandelys.ledoIndeliai[1]}.`);
      await time(1000);
      console.log(`Paruoštus ledus pagardiname ${sandelys.priedai[4]}.`);
      await time(500);
      console.log(`Grąžiname užsakymą.`);
      klientasValgoLedus();
    }
  } catch(error) {
    console.log("Darbo diena baigėsi.");
  } finally {
    console.log("Baigėsi diena.");
  }
}

let klientasValgoLedus = async () => {
  try{
    while(parduotuveAtidaryta){
      await time(500);
      console.log("Klientas valgo ledus.");
    }
  } catch(error) {
    console.log("Darbo diena baigėsi.");
  } finally {
    console.log("Baigėsi diena.");
  }
}

let papildytiSandeli = async () =>{
  try{
    while(parduotuveAtidaryta){
      await time(20000);
      console.log("Klientas valgo ledus.");
    }
  } catch(error) {
    console.log("Darbo diena baigėsi.");
  } finally {
    console.log("Baigėsi diena.");
  }
}

let valymas = async () =>{
  try{
    while(parduotuveAtidaryta){
      await time(2000);
      console.log("Valomas stalas.");
      await time(10000);
      console.log("Valomos grindys.");
    }
  } catch(error) {
    console.log("Darbo diena baigėsi.");
  } finally {
    console.log("Baigėsi diena.");
  }
}

let leduAparatoValymas = async () =>{
  try{
    while(parduotuveAtidaryta){
      await time(20000);
      console.log("Pradedame valyti ledų aparatą.");
      valomasLeduAparatas = true;
      await time(2000);
      console.log("Ledu aparatas yra išvalytas.");
      valomasLeduAparatas = false;
      produkcija();
    }
  } catch(error) {
    console.log("Darbo diena baigėsi.");
  } finally {
    console.log("Baigėsi diena.");
  }
}

produkcija();
papildytiSandeli();
valymas();
leduAparatoValymas();









//              Promises
/*const uzsakymas = (laikas, veiksmas) => {
  return new Promise( (resolve, reject) => {
    if(parduotuveAtidaryta){
      if(!isNaN(laikas)){
        setTimeout(() => {
          resolve(veiksmas());
        }, laikas);
      } else {
        reject(console.log("Nepasirinktas darbo laikas."));
      }
    } else {
      reject(console.log("Parduotuvė uždaryta. Ateik rytoj."));
    }
  });
}

uzsakymas(2000, () => console.log(`Kviečiame produkciją. Perduodame jiems: ${sandelys.vaisiai[0]}, ${sandelys.ledoPagrindai[1]}, ${sandelys.ledoIndeliai[1]}, ${sandelys.priedai[4]}.`))
  .then( () => uzsakymas(0, () => console.log(`Pradedame gaminti ledus su ${sandelys.vaisiai[0]}.`)))
  .then( () => uzsakymas(2000, () => console.log(`Susmulkiname ${sandelys.vaisiai[0]}.`)))
  .then( () => uzsakymas(5500, () => console.log(`Sudedame ${sandelys.ledoPagrindai[1]} į ledų aparatą ir laukiame kol pabaigs ruošti.`)))
  .then( () => uzsakymas(3000, () => console.log(`Paimame ${sandelys.ledoPagrindai[1]} masę iš ledų aparato, sumaišome ją su susmulkintais ${sandelys.vaisiai[0]} ir sudedame mišinį į ${sandelys.ledoIndeliai[1]}.`)))
  .then( () => uzsakymas(1000, () => console.log(`Paruoštus ledus pagardiname ${sandelys.priedai[4]}.`)))
  .then( () => uzsakymas(500, () => console.log(`Grąžiname užsakymą.`)))
  .catch( () => console.log("Klientas nuėjo."))
  .finally( () => console.log("Veiksmas baigėsi."));
*/
/*
//          Callbacks into callback hell
const uzsakymas = (vaisius, ledoPagrindas, ledoIndelis, priedas, kviesti_produkcija) =>{
  console.log("Įvyko užsakymas.");
    setTimeout(() => {
      console.log(`Kviečiame produkciją. Perduodame jiems: ${sandelys.vaisiai[vaisius]}, ${sandelys.ledoPagrindai[ledoPagrindas]}, ${sandelys.ledoIndeliai[ledoIndelis]}, ${sandelys.priedai[priedas]}.`);
      kviesti_produkcija(sandelys.vaisiai[vaisius], sandelys.ledoPagrindai[ledoPagrindas],sandelys.ledoIndeliai[ledoIndelis], sandelys.priedai[priedas]);
    }, 2000);
};

const produkcija = (vaisius, pagrindas, indelis, priedas) =>{
  setTimeout(() => {
    console.log(`Pradedame gaminti ledus su ${vaisius}.`);
    setTimeout(()=>{
      console.log(`Susmulkiname ${vaisius}.`);
      setTimeout(()=>{
        console.log(`Sudedame ${pagrindas} į ledų aparatą ir laukiame kol pabaigs ruošti.`);
        setTimeout(()=>{
          console.log(`Paimame ${pagrindas} masę iš ledų aparato, sumaišome ją su susmulkintais ${vaisius} ir sudedame mišinį į ${indelis}.`);
          setTimeout(()=>{
            console.log(`Paruoštus ledus pagardiname ${priedas}.`);
            setTimeout(()=>{
              console.log(`Grąžiname užsakymą.`);
            }, 500);
          }, 1000);
        }, 3000);
      }, 5500);
    }, 2000);
  }, 0001);
};

uzsakymas(0, 1, 1, 4, produkcija);
*/