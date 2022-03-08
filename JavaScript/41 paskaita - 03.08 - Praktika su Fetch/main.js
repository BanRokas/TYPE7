/* grupe */

fetch("http://localhost:3000/destytojas")
  .then(res => res.json())
  .then(data => {
    grupesIsvedimasILentele(data);
  })
  .then(() => fetch("http://localhost:3000/studentai")
    .then(res => res.json())
    .then(data => {
      data.forEach(studentas => {
        grupesIsvedimasILentele(studentas);
      })
    })
  )

let grupesIsvedimasILentele = (asmuo) =>{
  document.querySelector("#grupesLentele > tbody").innerHTML += `
    <tr>
      <td>${asmuo.vardas}</td>
      <td>${asmuo.pavarde}</td>
    </tr>
  `;
}

document
  .querySelector("#pridetiStudenta")
  .addEventListener("submit", e =>{
    e.preventDefault();
    console.dir(e.target);
    let vardas = e.target.elements.studVardas.value;
    let pavarde = e.target.elements.studPav.value;
    console.log(vardas, pavarde);
    fetch("http://localhost:3000/studentai",{
      method: "POST",
      headers : {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({vardas: vardas, pavarde: pavarde})
    })
  });

/* menas */

fetch("http://localhost:3001/beautifulPiecesOfArtAndStuffMaybeIDoNotKnowDoNotTakeMyWordForIt")
  .then(res => res.json())
  .then(data => {
    data.forEach(element => isvestiMenoDirbinius(element));
  })

let isvestiMenoDirbinius = (dirbinys) =>{
  document.querySelector("#kuriniai").innerHTML += `
    <div class="menoDirbinys">
      <h1>${dirbinys.title}</h1>
      <div>
        <img src="${dirbinys.image}" height="200px">
        <p>${dirbinys.paragraph}</p>
      </div>
    </div>
  `;
}

document
  .querySelector(".menas form")
  .addEventListener("submit", e =>{
    e.preventDefault();
    console.dir(e.target);
    let pav = e.target.elements.menoPav.value;
    let apr = e.target.elements.menoApras.value;
    let link = e.target.elements.menoUrl.value;
    console.log(pav, apr, link);
    fetch("http://localhost:3001/beautifulPiecesOfArtAndStuffMaybeIDoNotKnowDoNotTakeMyWordForIt",{
      method: "POST",
      headers : {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        title : pav,
        paragraph : apr,
        image : link
      })
    })
  });