let antraste = document.querySelector(".heading");
console.dir(antraste);

antraste.classList.add("redBg");
//antraste.className += " redBg"; // nesiūlau naudot
antraste.id = "yellowText";

antraste.setAttribute("style", "text-align:center; font-size: 3rem");

antraste.style.borderRadius = "30%";
antraste.style.display = "inline-block";

// Nuotrauku galerija
let nuotraukos = document.querySelectorAll(".foto");

for(let i = 0; i < nuotraukos.length; i++){
  let teigNeig;
  if(Math.ceil(Math.random()*2) == 1){
    teigNeig = 1;
  } else {
    teigNeig = -1;
  }
  nuotraukos[i].style.transform = 
    `translate(${Math.random()*i*50*teigNeig}px,${Math.random()*i*50*teigNeig}px)`;
  nuotraukos[i].addEventListener("mouseenter", duodamStiliu);
  nuotraukos[i].addEventListener("mouseleave", nuimamStiliu);
}
function duodamStiliu(e){
  e.target.style.zIndex = "1";
}
function nuimamStiliu(e){
  e.target.style.zIndex = "0";
}

document.querySelector("span").addEventListener('click', (e) => {
  console.log(e.target.classList);
  if (e.target.classList.toggle("c")) {
    // toggle patikrina ar turi tokį elementą ir jei turi - atima ir gražina false, jei neturi prideda ir grąžina true
    e.target.textContent = `Neturėjo C klasės. Tai pridėjome.`;
  } else {
    e.target.textContent = `Turėjo C klasę. Tai atimėm.`;
  }
})