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
          istrintiFilma(e.target.parentElement.id);
        })
      })
    document
      .querySelectorAll(".redaguotiBtn")
      .forEach(btn => {
        btn.addEventListener("click", e =>{
          pildytiRedagavimoForma(e.target.parentElement.id);
        })
      })
  })
  .catch(err => console.log(err, "buvo erroras kazkoks"))

document
  .querySelector("#addMovie")
  .addEventListener("submit", e => {
    e.preventDefault();
    let filmas = {
      pavadinimas : e.target.elements.filmoPav.value,
      paveiksliukas : e.target.elements.filmoImg.value,
      aprasymas : e.target.elements.filmoApras.value,
      leidimoMetai : e.target.elements.filmoMetai.value,
      trukme : e.target.elements.filmoTrukme.value,
      IMDB : e.target.elements.filmoBalas.value,
      tipas : e.target.elements.filmoZanras.value.split(","),
      rezisierius : e.target.elements.filmoRezisierius.value,
      aktoriai : e.target.elements.filmoAktorius.value.split(",")
    };
    fetch("http://localhost:3000/movies", {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
        "Accept" : "application/json plain/text */*"
      },
      body : JSON.stringify(filmas)
    })
  });

document
  .querySelector("#editMovie")
  .addEventListener("submit", e => {
    e.preventDefault();
    const filmoDataID = e.target.elements.submitRedagavimas.id;
    let filmas = {
      pavadinimas : e.target.elements.filmoPav.value,
      paveiksliukas : e.target.elements.filmoImg.value,
      aprasymas : e.target.elements.filmoApras.value,
      leidimoMetai : e.target.elements.filmoMetai.value,
      trukme : e.target.elements.filmoTrukme.value,
      IMDB : e.target.elements.filmoBalas.value,
      tipas : e.target.elements.filmoZanras.value.split(","),
      rezisierius : e.target.elements.filmoRezisierius.value,
      aktoriai : e.target.elements.filmoAktorius.value.split(",")
    };

    fetch(`http://localhost:3000/movies/${filmoDataID}`, {
      method : "PUT",
      headers : {
        "Content-type" : "application/json",
        "Accept" : "application/json plain/text */*"
      },
      body : JSON.stringify(filmas)
    })
  })

let istrintiFilma = (id) => {
  fetch(`http://localhost:3000/movies/${id}`, {
    method : "DELETE"
  })
}
let pildytiRedagavimoForma = (id) => {
  fetch(`http://localhost:3000/movies/${id}`)
    .then(res => res.json())
    .then(data => {
      const forma = document.querySelector("#editMovie");
      forma.elements.submitRedagavimas.id = data.id;
      forma.elements.filmoPav.value = data.pavadinimas;
      forma.elements.filmoImg.value = data.paveiksliukas;
      forma.elements.filmoApras.value = data.aprasymas;
      forma.elements.filmoMetai.value = data.leidimoMetai;
      forma.elements.filmoTrukme.value = data.trukme;
      forma.elements.filmoBalas.value = data.IMDB;
      forma.elements.filmoZanras.value = data.tipas;
      forma.elements.filmoRezisierius.value = data.rezisierius;
      forma.elements.filmoAktorius.value = data.aktoriai;
    })
}

let isvestiFilma = (filmas) => {
  document.querySelector("#movies").innerHTML += `
    <div class="filmas" id="${filmas.id}">
      <button class="trintiBtn">Trinti Filmą</button>
      <button class="redaguotiBtn">Redaguoti Filmą</button>
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