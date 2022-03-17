export default class Sarasas{
  constructor(
    lokacija,
    tipas,
    sarasoID,
    sarasoKlases,
    sarasoElementai
  ){
    this.app = lokacija;
    this.type = tipas; // ol | ul
    this.id = sarasoID;
    this.classes = sarasoKlases;
    this.listItems = sarasoElementai;
    this.render();
  }
  render = () => {
    console.log(
      this.app,
      this.type,
      this.id,
      this.classes,
      this.listItems
    );

    // susikuriame sąrašą pagal nurodytą tipą
    const list = document.createElement(this.type);

    // priskiriame sąrašui nurodytą id
    //list.id = this.id;
    list.setAttribute("id", this.id);

    // priskiriame sąrašui nurodytas klases
    this.classes.forEach(klase => list.classList.add(klase));

    // toliau kuriame list items elementus
    // sukame ciklą per mašinų pavadinimus
    this.listItems.sarasoElementuTekstai.forEach( item => {

      // kiekvienam mašinos pavadinimui kuriame atskirą sąrašo elementą
      const listItem = document.createElement("li");

      // sąrašo elemento tekstą prilyginu mašinos pavadinimui
      listItem.textContent = item;

      // priskiriame sąrašo elementui nurodytas klases
      this.listItems.sarasoElementuKlases.forEach(
        klase => listItem.classList.add(klase)
      );

      // į sąrašą pridedame po mašiną
      list.appendChild(listItem);
    });

    // į nurodytą vietą pridedame pabaigtą sąrašą
    this.app.appendChild(list);
  }
}

/*
  lokacija
  tipas ( ol | ul )
  sarasoId
  sarasoKlases [
    klase1,
    klase2,
    klase3
  ]
  listItems  {
    listItemsText : [
      pirmas,
      antras,
      trecias
    ],
    listItemsClasses : [
      klase1,
      klase2,
      klase3
    ]
  }
*/