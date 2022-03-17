import Sarasas from "./komponentai/sarasas.js";
import Input from "./komponentai/input.js";


let sarasoApp = document.querySelector("#sarasas");

new Sarasas(
  sarasoApp,
  "ul",
  "masinos",
  ["klase1", "klase2", "klase33"],
  {
    sarasoElementuTekstai : [
      "Audi",
      "BMW",
      "Fiat",
      "Porche",
      "Mitsubishi"
    ],
    sarasoElementuKlases : [
      "miniKlase1",
      "miniKlase2"
    ]
  }
);

new Sarasas(
  sarasoApp,
  "ol",
  "",
  ["išsivirtiMakaronų"],
  {
    sarasoElementuTekstai : [
      "Puodas",
      "Vanduo",
      "Kaitinti",
      "Aliejus",
      "Druska",
      "Makaronai",
      "Sūris"
    ],
    sarasoElementuKlases : [
      "zingsnis"
    ]
  }
);

new Input(
  sarasoApp,
  "checkbox",
  [
    {name:"checked", value:""}
  ]
)