/*
  vieta kur ikelti paragrafa
  tekstas (kuris yra paragrafe parašytas)
  klasę/es
*/

export default class Paragrafas{
  constructor(lokacija, tekstas, ...klases){
    this.output = lokacija;
    this.text = tekstas;
    this.classes = klases;
    this.render();
  }
  render = () => {
    let par = document.createElement("p");
    /*let textNode = document.createTextNode(this.text);
    par.appendChild(textNode);*/
    /*par.append(this.text);*/
    /*par.textContent = this.text;*/
    par.innerHTML = this.text;
    console.dir(par);
    this.classes.forEach(klase => par.classList.add(klase));
    //par.innerHTML = `<p class="${this.classes.map(klase => klase)}">${this.text}</p>`;
    this.output.appendChild(par);
  }
}