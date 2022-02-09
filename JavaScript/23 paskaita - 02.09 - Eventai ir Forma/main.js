document.addEventListener("click", stopIt);

function stopIt(){
  console.log("Don't click MEEE!!!");
}

document.querySelector(".magic").addEventListener("click", magic);
let i = 0;
function magic(){
  let h2 = document.createElement("h2");
  //document.querySelector(".magic").style.backgroundColor = "red";
  //document.querySelector('.magic').style = 'color: red; border: solid red';
  if(i == 0){
    h2.style = "position: absolute; top: 100px";
    h2.innerHTML = "Me magically appear!";
    i++;
  } else if(i == 1){
    h2.style = "position: absolute; top: 200px";
    h2.innerHTML = "Me magically appear again!";
    i++;
  } else if(i == 2){
    h2.style = "position: absolute; right: 100px";
    h2.innerHTML = "Me dissapear.";
    i++;
  } else if(i == 3){
    h2.style = "position: absolute; bottom: 200px";
    h2.innerHTML = "End of story";
    i++;
  }
  document.querySelector("div").appendChild(h2);
}

//document.getElementsByTagName("form")[0]...
document.querySelector("form").addEventListener("submit", formosFunkcija);
function formosFunkcija(e){
  e.preventDefault();
  console.log(e);
  let vardas = e.target.querySelector("#name").value;
  let pastas = e.target.querySelector("#mail").value;
  let pass = e.target.querySelector("#pass").value;
  let amzius = e.target.querySelector("#age").value;
  console.log("vardas",e.target[0].value);
  console.log("Vardas", vardas);
  console.log("Amžius", amzius);
  console.log("Paštas", pastas);
  console.log("Slaptažodis", pass);
  document.querySelector("#output").innerHTML = `
    <h2> Jūsų vardas yra ${vardas}, esate ${amzius} amžiaus. Atsiųsime patvirtinimą į jūsų nurodytą el. paštą: "${pastas}". O jūsų slaptažodis lieka mūsų paslaptimi. </h2>
  `;
  e.target.querySelector("#name").value = null;
  e.target.querySelector("#mail").value = null;
  e.target.querySelector("#pass").value = null;
  e.target.querySelector("#age").value = null;
}


function sudetiesFunkcija(e){
  console.log(e);
  let nr1 = Number(e.path[1].querySelector("#sudNr1").value);
  let nr2 = Number(e.path[1].querySelector("#sudNr2").value);
  e.path[1].querySelector("#sudAts").innerHTML = nr1 + " + " + nr2 + " = " + (nr1 + nr2);
  e.path[1].querySelector("#sudNr1").value = null;
  e.path[1].querySelector("#sudNr2").value = null;
}

/*function sudetiesFunkcija(){
  let nr1 = Number(document.querySelector("#sudNr1").value);
  let nr2 = Number(document.querySelector("#sudNr2").value);
  document.querySelector("#sudAts").innerHTML = nr1 + " + " + nr2 + " = " + (nr1 + nr2);
  document.querySelector("#sudNr1").value = null;
  document.querySelector("#sudNr2").value = null;
}*/