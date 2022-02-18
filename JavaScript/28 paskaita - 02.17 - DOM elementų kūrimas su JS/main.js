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
  Visą tai daryti kuriant Node'us | naudojant JS ir nerašant jame HTML kodo.
*/

const sekcijaSav1 = document.createElement("section");
let heading = document.createElement("h1");
text = document.createTextNode("Sveiki gyvi, kas dar gyvi :) ");
heading.appendChild(text);
img = document.createElement("img");
img.setAttribute("src", "images/nature5.jpg");
img.style.height = "200px";
p = document.createElement("p");
text = document.createTextNode("  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore nostrum atque repudiandae ullam consequatur pariatur magni reprehenderit molestiae! Voluptatibus atque assumenda odit totam explicabo accusantium dolor maxime ea. Provident?");
p.appendChild(text);
sekcijaSav1.append(heading, img, p);
document.body.appendChild(sekcijaSav1);

/*
  JS'u naujoje sekcijoje sukurkite x stulpelių ir y eilučių (x ir y nurodomas formoje) lentelę paspaudžiant ant mygtuko.
  Lentelei nekurkite Thead ir Tbody.
  Kiekvienam td duokite informacijos gabaliuką (tam kad matytųsi lentelės elementai)
  Galite dar duoti rėmelius (tam, kad dar geriau matytųsi lentelės elementai)
  Kam sunkiai sekasi, galite susikurti viską iki lentelės naudodami HTML.
*/

let input = document.createElement("input");
input.setAttribute("type", "submit");

/*for (let i = 0; i < eiluciuSkaicius; i++) {
  const eilute = document.createElement("tr");
  lentele.appendChild(eilute);
  eilute.style.border = "3px solid grey";
  for (let j = 0; j < stulpeliuSkaicius; j++) {
    const stulpelis = document.createElement("td");
    stulpelis.textContent = "BB"
    eilute.append(stulpelis);
    stulpelis.style.border = "3px solid grey";
    stulpelis.style.color = "green"
  }
}*/

/*
  Susikurti puslapio Menu (su bent 3'jomis nuorodomis ir logotipu) tvarkingai (bet ne super gražiai) stilizuotą ir sukurtą vien su JS'u nerašant HTML kodo.
*/