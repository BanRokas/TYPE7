let h1 = document.querySelector("h1");
console.dir(h1);

let asmenys = [
  {
    vardas : "Rokas",
    pavarde : "Banaitis",
    amzius : 25,
    vedes : true,
    turiVaiku : false,
    megstamiFilmai: ["","",""],
    turiMasina: true,
    masina : {

    },
    kontaktai: {
      elPastai: ["rokas.banaitis@gmail.com", "rokas@hotmail.com", "rokas@one.lt"],
      telefonai: ["869945125", "+37062154789"]
    },
    pilnametis : function() {
      /*if(this.amzius >= 18){
        return true;
      } else {
        return false;
      }*/
      return this.amzius >= 18 ? true : false;
    },
    infoApie: function(vardas){
      return `${this.vardas + " " + vardas + " " + this.pavarde} yra ${this.amzius} metų amžiaus. ${this.vedes ? "Yra" : "Nėra"} vedęs ir ${this.turiVaiku ? "turi" : "neturi"} vaikų.`;
    },
    isvestKontaktus: function(){
      return `${this.vardas + " " + this.pavarde} telefonas yra ${this.kontaktai.telefonai[0]}, o elektroninis paštas - ${this.kontaktai.elPastai[0]}`;
    },
    random: function(){
      return "Labas rytas :)";
    }
  },{
    vardas : "Rokas",
    pavarde : "Banaitis",
    amzius : 10,
    vedes : false,
    turiVaiku : false,
    megstamiFilmai: ["","",""],
    turiMasina: true,
    masina : {

    },
    kontaktai: {
      elPastai: ["rokas@hotmail.com", "rokas@one.lt"],
      telefonai: ["+37062154789"]
    },
    pilnametis : function() {
      /*if(this.amzius >= 18){
        return true;
      } else {
        return false;
      }*/
      return this.amzius >= 18 ? true : false;
    },
    infoApie: function(){
      return `${this.vardas + " " + this.pavarde} yra ${this.amzius} metų amžiaus. ${this.vedes ? "Yra" : "Nėra"} vedęs ir ${this.turiVaiku ? "turi" : "neturi"} vaikų.`;
    },
    isvestKontaktus: function(){
      return `${this.vardas + " " + this.pavarde} telefonas yra ${this.kontaktai.telefonai[0]}, o elektroninis paštas - ${this.kontaktai.elPastai[0]}`;
    },
    random: function(){
      return "Labas rytas :)";
    }
  }
];

let figuros = [
  {
    pavadinimas : "Kvadratas",
    plotis: 20,
    aukstis : 20,
    info : function(){
      return `Figūra - ${this.pavadinimas}. Jos aukštis yra ${this.aukstis}cm, o plotis ${this.plotis}cm.`;
    },
    plotas : function(){
      return `Figūros plotas yra: ${this.plotis * this.aukstis}cm^2.`;
    },
    perimetras : function(){
      return `Figūros perimetras yra: ${this.plotis*2 + this.aukstis*2}cm.`;
    }
  },{
    pavadinimas : "Statusis trikampis",
    plotis: 3,
    statinis : 4,
    info : function(){
      return `Figūra - ${this.pavadinimas}. Jos statinis yra ${this.statinis}cm, o plotis ${this.plotis}cm.`;
    },
    plotas : function(){
      return `Figūros plotas yra: ${(this.plotis * this.statinis)/2}cm^2.`;
    },
    perimetras : function(){
      return `Figūros perimetras yra: ${this.plotis + this.statinis + this.izambine()}cm.`;
    },
    izambine : function(){
      return (this.statinis**2 + this.plotis**2)**(1/2);
      // return Math.sqrt(this.statinis**2 + this.plotis**2);
    }
  }
]
/*       Uzduotis
  Papildyti kintamąjį figuros šiomis figūromis:
    1) Stačiakampis.
    2) Statusis trikampis.
    3) Apskritimas.
    4) Beleką.
    5) ... .
    +6) 3D figūrą.
*/

// -------------------------------------
//            kvadratai
document.querySelector("#kiekKvadratu").addEventListener("submit", (e) => {
  e.preventDefault();
  const kiek = Number(e.target.elements.kiekKv.value);
  const kvadratai = document.querySelector("#kvadratai");
  kvadratai.innerHTML = "";
  for(let i = 1; i <= kiek; i++){
    kvadratai.innerHTML += `
      <div class="kvadratas">
        ${(i%3?'':'Fizz')+(i%5?'':'Buzz')||i}
      </div>
    `;
  }
});

// -------------------------------------
//            paveikslai
