document.cookie = `vardas=kazkoksVardas; expires=${new Date('2022 03 05')};`;

sessionStorage.clear();
sessionStorage.setItem("Vardas","Rokas");
sessionStorage.setItem("Pavardė","Banaitis");
sessionStorage.setItem("Amžius","25");
sessionStorage.setItem("Pareigos","Dėstytojas");
for(let i = 0; i < sessionStorage.length; i++){
  console.log(sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i)));
}
sessionStorage.removeItem(sessionStorage.key(0));

/* Užduotis kartu */
document.querySelector("#formIrOutput > form").addEventListener("submit", e => {
  e.preventDefault();
  let key = e.target.elements.key.value;
  let value = e.target.elements.value.value;

  localStorage.setItem(key, value);

  uploadDataToScreen();

  e.target.elements.key.value = null;
  e.target.elements.value.value = null;
});

let uploadDataToScreen = () =>{
  let output = "";
  for(let i = 0; i < localStorage.length; i++){
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

let trinti = (raktazodis) =>{
  localStorage.removeItem(raktazodis);
  uploadDataToScreen();
}

uploadDataToScreen();