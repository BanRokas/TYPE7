export default class Staciakampis{
  constructor(plotis, aukstis){
    this.pavadinimas = "Stačiakampis";
    this.plotis = plotis;
    this.aukstis = aukstis;
    this.perimetras = this.plotis*2 + this.aukstis*2;
    this.plotas = this.plotis*this.aukstis;
  }
}