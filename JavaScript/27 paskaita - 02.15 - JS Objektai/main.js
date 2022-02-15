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
