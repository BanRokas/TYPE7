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

