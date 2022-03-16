export default class Asmuo{
  constructor(vardas, amzius){
    this.vardas = vardas;
    this.amzius = amzius;
  }
}

export function sakykVarda(zmogus){
  console.log(`Asmens vardas yra ${zmogus.vardas}.`);
}
export function arPilnametis(zmogus){
  console.log(zmogus.amzius >= 18 ? "Taip" : "Ne");
}