export default class Trikampis{
  constructor(plotis, aukstis){
    this.pavadinimas = "Statusis trikampis";
    this.plotis = plotis;
    this.aukstis = aukstis;
    this.izambine = (this.plotis**2+this.aukstis**2)**(1/2);
    this.perimetras = this.plotis + this.aukstis + this.izambine;
    this.plotas = this.plotis*this.aukstis/2;
  }
}