fetch("http://localhost:3000/destytojas")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    grupesIsvedimasILentele(data);
  })
  .then(() => fetch("http://localhost:3000/studentai")
    .then(res => res.json())
    .then(data => {
      console.log(data);
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