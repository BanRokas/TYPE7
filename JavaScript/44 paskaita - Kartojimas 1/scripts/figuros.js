class Staciakampis{
  constructor(plotis, aukstis){
    this.pavadinimas = "Stačiakampis";
    this.plotis = plotis;
    this.aukstis = aukstis;
    this.perimetras = this.plotis*2 + this.aukstis*2;
    this.plotas = this.plotis*this.aukstis;
  }
}

class Trikampis{
  constructor(plotis, aukstis){
    this.pavadinimas = "Statusis trikampis";
    this.plotis = plotis;
    this.aukstis = aukstis;
    this.izambine = (this.plotis**2+this.aukstis**2)**(1/2);
    this.perimetras = this.plotis + this.aukstis + this.izambine;
    this.plotas = this.plotis*this.aukstis/2;
  }
}

class Apskritimas{
  constructor(spindulys){
    this.pavadinimas = "Apskritimas";
    this.spindulys = spindulys;
    this.skersmuo = this.spindulys * 2;
    this.perimetras = Math.PI * this.skersmuo;
    this.plotas = Math.PI * (this.spindulys**2);
  }
}