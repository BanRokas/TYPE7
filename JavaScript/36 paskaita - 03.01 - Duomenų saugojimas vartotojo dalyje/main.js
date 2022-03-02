document.cookie = `vardas=kazkoksVardas; expires=${new Date('2022 03 05')};`;

sessionStorage.clear();
sessionStorage.setItem("Vardas", "Rokas");
sessionStorage.setItem("Pavardė", "Banaitis");
sessionStorage.setItem("Amžius", "25");
sessionStorage.setItem("Pareigos", "Dėstytojas");
for (let i = 0; i < sessionStorage.length; i++) {
  console.log(sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i)));
}
sessionStorage.removeItem(sessionStorage.key(0));

/* Užduotis kartu */
document.querySelector("#formIrOutput > form").addEventListener("submit", e => {
  e.preventDefault();
  console.log(e);
  let key = e.target.elements.key.value;
  let value = e.target.elements.value.value
  let date = e.target.elements.data.value;

  localStorage.setItem(key, value + " " + date);
  localStorage.removeItem("data");
  localStorage.removeItem("key");
  localStorage.removeItem("value");

  uploadDataToScreen();

  e.target.elements.key.value = null;
  e.target.elements.value.value = null;
  e.target.elements.data.value = null;
});

let inputai = document.querySelectorAll("#formIrOutput input");
inputai.forEach(input => {
  input.addEventListener("change", e => {
    console.log(e);
    localStorage.setItem(e.target.id, e.target.value);
  });
});

document.querySelector("#data").value = localStorage.getItem("data");
document.querySelector("#key").value = localStorage.getItem("key");
document.querySelector("#value").value = localStorage.getItem("value");

let uploadDataToScreen = () => {
  let output = "";
  for (let i = 0; i < localStorage.length; i++) {
    output += `
      <div>
        <span>${localStorage.key(i)}</span>
        <span>${localStorage.getItem(localStorage.key(i))}</span>
        <button onclick="trinti('${localStorage.key(i)}')">trinti</button>
      </div>
    `;
  }
  document.querySelector("#duomenuIsvedimas").innerHTML = output;
}

let trinti = (raktazodis) => {
  localStorage.removeItem(raktazodis);
  uploadDataToScreen();
}

localStorage.setItem("objektas", `{"zodis":"reiksme", "kitasRaktas":"KitaReiksme", "metai": 2022}`);

uploadDataToScreen();