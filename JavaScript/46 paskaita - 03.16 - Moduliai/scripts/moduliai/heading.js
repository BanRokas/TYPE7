export default class Heading{
  constructor(lokacija, tekstas, dydis){
    this.app = lokacija;
    this.text = tekstas;
    this.type = dydis;
    this.render();
  }
  render = () => {
    let heading = document.createElement(`h${this.type}`);
    console.dir(heading);
  }
}