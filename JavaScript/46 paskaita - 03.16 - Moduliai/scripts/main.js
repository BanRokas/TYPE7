import Person, { sakykVarda as sayName, arPilnametis as isLegalAge } from "./moduliai/modulis.js";
import Staciakampis from "./moduliai/staciakampis.js";
import Trikampis from "./moduliai/trikampis.js";
import Apskritimas from "./moduliai/apskritimas.js";

let zmogus0 = new Person("Rokas", 25);
console.log(zmogus0);
sayName(zmogus0);
isLegalAge(zmogus0);


document // figuros pasirinktimas
  .querySelector("#figura")
  .addEventListener("change", e => {
    if(e.target.value === "stac"){
      document
      .querySelector("#extraLaukai")
      .innerHTML = `
        <label for="plotis">Įrašykite stačiakampio plotį:</label>
        <input type="number" name="plotis" id="plotis"><br>
        <label for="aukstis">Įrašykite stačiakampio aukštį:</label>
        <input type="number" name="aukstis" id="aukstis"><br>
        <input type="submit" value="Generuoti">
      `;
    } else if(e.target.value === "trik"){
      document
      .querySelector("#extraLaukai")
      .innerHTML = `
        <label for="plotis">Įrašykite trikampio plotį:</label>
        <input type="number" name="plotis" id="plotis"><br>
        <label for="aukstis">Įrašykite trikampio statinį:</label>
        <input type="number" name="aukstis" id="aukstis"><br>
        <input type="submit" value="Generuoti">
      `;
    } else if(e.target.value === "apsk"){
      document
      .querySelector("#extraLaukai")
      .innerHTML = `
        <label for="spindulys">Įrašykite apskritimo spindulį:</label>
        <input type="number" name="spindulys" id="spindulys"><br>
        <input type="submit" value="Generuoti">
      `;
    } else {
      document
      .querySelector("#extraLaukai")
      .innerHTML = ``;
    }
  });

document // figuros sukurimas ir perdavimas canvas'ui
  .querySelector("#figurosForma")
  .addEventListener("submit", e => {
    e.preventDefault();
    let figura;
    if(e.target.elements.figura.value === "stac"){
      let plotis = e.target.elements.plotis.valueAsNumber;
      let aukstis = e.target.elements.aukstis.valueAsNumber;
      figura = new Staciakampis(plotis, aukstis);
    } else if(e.target.elements.figura.value === "trik"){
      let plotis = e.target.elements.plotis.valueAsNumber;
      let aukstis = e.target.elements.aukstis.valueAsNumber;
      figura = new Trikampis(plotis, aukstis);
    } else if(e.target.elements.figura.value === "apsk"){
      let spindulys = e.target.elements.spindulys.valueAsNumber;
      figura = new Apskritimas(spindulys);
    }
    createCanvas(figura);
  });

let createCanvas = (figura) => {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("width","400px");
  canvas.setAttribute("height","400px");
  canvas.style.border = "1px solid black";
  let context = canvas.getContext("2d");

  if(figura.pavadinimas === "Stačiakampis"){
    context.beginPath();
    context.rect(30, 30, figura.plotis, figura.aukstis);
    context.stroke();
  } else if(figura.pavadinimas === "Statusis trikampis"){
    context.beginPath();
    context.moveTo(30, 30);
    context.lineTo(30, figura.aukstis+30);
    context.lineTo(figura.plotis+30, figura.aukstis+30);
    context.closePath();
    context.stroke();
  } else if(figura.pavadinimas === "Apskritimas"){
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, figura.spindulys, 0, 2*Math.PI);
    context.stroke();
  }

  document.querySelector("#figuruIsvedimas").appendChild(canvas);
}