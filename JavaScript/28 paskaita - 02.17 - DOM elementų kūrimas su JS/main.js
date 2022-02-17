let spalvos = ["red", "green", "blue", "yellow"];

document.querySelector("#spalva").addEventListener("click", e => {
  console.dir(e.target);
  e.target.style.color = spalvos[Math.floor(Math.random()*4)];
});

document.querySelector("#spalvos").addEventListener("click", e => {
  console.dir(e.target);
  let pirma = Math.floor(Math.random()*256);
  let antra = Math.floor(Math.random()*256);
  let trecia = Math.floor(Math.random()*256);
  e.target.style.color = `rgb(${pirma}, ${antra}, ${trecia})`;
});


/*          DOM elementų kūrimas naudojant JS 
    1) document.createElement("tagName"); - sukurti html'o elementą.
    2) document.createTextNode("tekstas"); - sukurti teksto elementą.
    3) parentElement.append(string|Node); - tėviniam elementui prie galo pridėti informaciją.
    4) parentElement.appendChild(Node); - tėviniam elementui prie galo pridėti Node tipo elementą.
    5) parentElement.prepend(string|Node); - tėviniam elementui į pradžią pridėti informaciją.
    6) parentElement.removeChild(Node); - iš tėvinio elemento išimti nurodytą Node'ą.
    7) element.remove(); ištrina Node elementą.
*/

const app = document.querySelector("#app");

const appHeading = document.createElement("h1");
let text = document.createTextNode("I'm a savage, classy, bougie, ratchet, sassy, moody, nasty");
appHeading.appendChild(text);
app.appendChild(appHeading);

let p = document.createElement("p");
let stringas = "Labas rytas";
p.append(stringas);
app.prepend(p);

p = document.createElement("p");
p.append("Labas vakaras");
app.prepend(p);

let removedChild = app.removeChild(p);
let oldP = app.children[0];
app.removeChild(oldP);

let img = document.createElement("img");
img.setAttribute("src", "images/nature5.jpg");
img.style.height = "200px";
app.appendChild(img);

/*
  body gale pridėti sekciją, kurioje būtų h1, img ir p
*/