fetch("http://localhost:3000/movies")
  .then(res => {
    if(res.ok){
      return res.json();
    } else {
      console.log("failed to load data. Wrong URL provided");
    }
  })
  .then(data => {
    console.log(data);
    data.forEach(movie => isvestiFilma(movie));
    document
      .querySelectorAll(".trintiBtn")
      .forEach(btn => {
        btn.addEventListener("click", e =>{
          console.log(e.target.parentElement.id);
          istrintiFilma(e.target.parentElement.id);
        })
      })
  })
  .catch(err => console.log(err, "buvo erroras kazkoks"))

document.querySelector("#pridetiZanra").addEventListener("click", e => {
  console.log(e);
  let input = document.createElement("input");
  input.setAttribute("type","text");
  input.setAttribute("name","filmoZanras");
  e.target.parentElement.insertBefore(input, e.target);
});

document
  .querySelector("#addMovie")
  .addEventListener("submit", e => {
    e.preventDefault();
    console.dir(e.target);
    let tipas = [];
    e.target.elements.filmoZanras.forEach(zanras => tipas.push(zanras.value));
    console.log(tipas);
    let filmas = {
      pavadinimas : e.target.elements.filmoPav.value,
      paveiksliukas : e.target.elements.filmoImg.value,
      aprasymas : e.target.elements.filmoApras.value,
      leidimoMetai : e.target.elements.filmoMetai.value,
      trukme : e.target.elements.filmoTrukme.value,
      IMDB : e.target.elements.filmoBalas.value,
      tipas : tipas,
      rezisierius : e.target.elements.filmoRezisierius.value,
      aktoriai : [e.target.elements.filmoAktorius.value]
    };
    console.log(filmas);
    fetch("http://localhost:3000/movies", {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Accept" : "application/json plain/text "
      },
      body : JSON.stringify(filmas)
    })
  });

let istrintiFilma = (id) => {
  fetch(`http://localhost:3000/movies/${id}`, {
    method : "DELETE"
  })
}

let isvestiFilma = (filmas) => {
  document.querySelector("#movies").innerHTML += `
    <div class="filmas" id="${filmas.id}">
      <button class="trintiBtn">Trinti Filmą</button>
      <h1>${filmas.pavadinimas}</h1>
      <img src="${filmas.paveiksliukas}">
      <p>${filmas.aprasymas}</p>
      <div class="extraMovieInfo">
        <p>
          <span> ${filmas.leidimoMetai} metai | </span>
          <span> ${filmas.trukme} minutės | </span>
          <span> IMDB score: ${filmas.IMDB} </span>
        </p>
        <p>
          Žanras: ${filmas.tipas.map(tipas => `<span> ${tipas}</span>`)}
        </p>
        <p> Režisierius: ${filmas.rezisierius} </p>
        <p> Aktoriai: ${
          filmas.aktoriai.map(aktorius => `<span> ${aktorius}</span>`)
        } </p>
      </div>
    </div>
  `;
}