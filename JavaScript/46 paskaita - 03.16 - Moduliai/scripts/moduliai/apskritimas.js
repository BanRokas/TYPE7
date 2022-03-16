export default class Apskritimas{
  constructor(spindulys){
    this.pavadinimas = "Apskritimas";
    this.spindulys = spindulys;
    this.skersmuo = this.spindulys * 2;
    this.perimetras = Math.PI * this.skersmuo;
    this.plotas = Math.PI * (this.spindulys**2);
  }
}