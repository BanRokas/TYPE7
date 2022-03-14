/*
  UI vartotojui rinktis stačiakampis/trikampis/apskritimas

  Vartotojui pasirinkus figūrą - pateikiame jam informacijos laukus apie tą figūrą.

  Vartotojui supildžius laukus ir paspaudus mygtuką - klasės pagalba sukuriame figūrą ir ją Canvas'e išpiešiame.

  extra: CRUD - Patobulinsime, kad figūrų duomenys būtų keliami į duomenų bazę (json serverį) ir į ekraną figūros būtų išpiešiamos pagal tuos duomenis. Galimybė redaguoti ekrane matomą figūrą. Galimybė trinti ekrane matomą figūrą.
*/

document
  .querySelector("#figura")
  .addEventListener("change", e => {
    if(e.target.value === "stac"){
      document
      .querySelector("#extraLaukai")
      .innerHTML = `
        <label for="plotis">Įrašykite stačiakampio plotį:</label>
        <input type="number" name="plotis" id="plotis"><br>
        <label for="aukstis">Įrašykite stačiakampio aukštį:</label>
        <input type="number" name="aukstis" id="aukstis"><br>
        <input type="submit" value="Generuoti">
      `;
    } else if(e.target.value === "trik"){
      document
      .querySelector("#extraLaukai")
      .innerHTML = `
        <label for="plotis">Įrašykite trikampio plotį:</label>
        <input type="number" name="plotis" id="plotis"><br>
        <label for="aukstis">Įrašykite trikampio statinį:</label>
        <input type="number" name="aukstis" id="aukstis"><br>
        <input type="submit" value="Generuoti">
      `;
    } else if(e.target.value === "apsk"){
      document
      .querySelector("#extraLaukai")
      .innerHTML = `
        <label for="spindulys">Įrašykite apskritimo spindulį:</label>
        <input type="number" name="spindulys" id="spindulys"><br>
        <input type="submit" value="Generuoti">
      `;
    } else {
      document
      .querySelector("#extraLaukai")
      .innerHTML = ``;
    }
  });

document
  .querySelector("#figurosForma")
  .addEventListener("submit", e => {
    e.preventDefault();
    if(e.target.elements.figura.value === "stac"){
      let plotis = e.target.elements.plotis.valueAsNumber;
      let aukstis = e.target.elements.aukstis.valueAsNumber;
      let figura = new Staciakampis(plotis, aukstis);
    } else if(e.target.elements.figura.value === "trik"){
      let plotis = e.target.elements.plotis.valueAsNumber;
      let aukstis = e.target.elements.aukstis.valueAsNumber;
      let figura = new Trikampis(plotis, aukstis);
    } else if(e.target.elements.figura.value === "apsk"){
      let spindulys = e.target.elements.spindulys.valueAsNumber;
      let figura = new Apskritimas(spindulys);
    }
  });