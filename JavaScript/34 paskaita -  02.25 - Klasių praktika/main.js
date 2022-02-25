class Car{
  constructor(name, year){
    this.name = name;
    this.year = year;
    this.helloCar = `Labas, čia mano mašina ${this.name} ir ji buvo pagaminta ${this.year} metais`;
  }
  age() {
    let dabartineData = new Date();
    dabartineData = dabartineData.getFullYear();
    return dabartineData - this.year;
  }
}
let manoMasina = new Car("Fiat", 2000);

class Rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
  }
  area(){
    let plotas = this.width * this.height;
    return plotas;
  }
  perimeter(){
    let perimetras = this.width*2 + this.height*2;
    return perimetras;
  }
}
let staciakampis3x12 = new Rectangle(3, 12);

class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.coordinates = `(${this.x},${this.y})`;
  }
  /*coordinates(){
    return `(${this.x},${this.y})`;
  }*/
  distance(kitasTaskas){
    return `Atstumas tarp taškų yra: ${Math.hypot(this.x-kitasTaskas.x,this.y-kitasTaskas.y)}`;
    //(Math.sqrt((t.x-r.x)**2 + (t.y-r.y)**2))
  }
}
let taskasA = new Point(5,10);
let taskasB = new Point(8,13);
let taskasC = new Point(0,0);
let taskasD = new Point(5,5);
console.log(taskasA.distance(taskasB));
console.log(taskasC.distance(taskasD));

class Rectangle_3D{
  constructor(width, height, depth){
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
  volume(){
    let turis = this.width*this.height*this.depth;
    return turis;
  }
  surfaceArea(){
    let pavPlotas = 2*((this.width*this.height) + (this.height*this.depth) + (this.depth*this.width));
    return pavPlotas;
  }
  perimeter(){
    let perimetras = 4*(this.width + this.height + this.depth);
    return perimetras;
  }
}
let kvadratas3D = new Rectangle_3D(2, 3, 4);

document.querySelector("#sukurtiMasina")
.addEventListener("submit", e => {
  e.preventDefault();
  let masinosMarke = e.target.elements.carName.value;
  let masinosMetai = e.target.elements.carYear.value;
  let masina = new Car(masinosMarke, masinosMetai);
  document.querySelector("#masinos > div").innerHTML += `
    <div>
      <h1> Mašina: ${masina.name}; Metai: ${masina.year} </h1>
      <p> ${masina.helloCar} </p>
      <p> ${masina.name} yra ${masina.age()} metų amžiaus.</p>
    </div>
  `;
  e.target.elements.carName.value = null;
  e.target.elements.carYear.value = null;
});