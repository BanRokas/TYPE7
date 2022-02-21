/*
3) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.
*/
let skaiciuMasyvas3 = [1,65,168,13123,21,61,684,651,91,-651,61,98,46,51,324,64,61,-66];
let didzMaz = (mas) => {
  //const highest = Math.max(...mas);
  //const lowest = Math.min(...mas);

  let vidurkis = 0;
  let lowest = mas[0];
  let highest = mas[0];

  mas.forEach(number => {
    if(number < lowest){
      lowest = number;
    } else if(number > highest){
      highest = number;
    }
    vidurkis += number;
  });
  vidurkis/=mas.length;

  console.log("Didziausias skaicius: " + highest);
  console.log("Mažiausias skaicius: " + lowest);
  console.log("Vidurkis: " + vidurkis);
}

didzMaz(skaiciuMasyvas3);

/*
2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)
*/

let skaicius2 = 445368454542; // 4-4536-8-45454-2
let uzd2 = (sk) => {
  sk = sk.toString();
  let isvestis = "";
  for(let i = 0; i < sk.length; i++){
    if(sk.charAt(i) % 2 == 0 && sk[i+1] % 2 == 0){
      isvestis += sk[i]+"-";
    } else {
      isvestis += sk[i];
    }
  }
  console.log(isvestis);
}
uzd2(skaicius2);

/*
  7) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.
*/

let masyvas7_1 = [1,2,3,4];
let masyvas7_2 = [2,3,4,5];
let masyvas7_3 = [3,4,5,6,7,9,8];
let masyvas7_4 = [9,5,4,3,5,4,2,6];
let masyvas7_5 = [5,4,3,5,4,2,6,1,2,3];

let uzd7 = (...masyvai) => {
  let atsakymas = [];
  let kartojasi = masyvai[0];

  masyvai.forEach(masyvas => {
    kartojasi.forEach((element, i) => {
      if(!masyvas.includes(element)){
        kartojasi[i] = null;
      }
    });
  });
  for(let i = 0; i < kartojasi.length; i++){
    if(kartojasi[i] !== null){
      atsakymas.push(kartojasi[i]);
    }
  }
  console.log(atsakymas);
}

uzd7(masyvas7_3, masyvas7_4, masyvas7_5);