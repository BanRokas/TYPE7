/*
EXTRA 2) Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų tik pirminius skaičius intervale nuo 0 iki 100.
        Pirminis skaičius - dalinasi TIK iš savęs paties ir iš 1 be liekanos.
        pvz(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101)
*/


let pirminiai = (nuo, iki) => {
  for(let i = nuo; i < iki; i++){
    let arPirminis = true;
    if(i === 0 || i === 1){
      console.log(i + " nėra pirminis");
      arPirminis = false;
    } else {
      for(let j = 2; j < i; j++){
        if(i % j === 0){
          console.log(i + " nėra pirminis");
          arPirminis = false;
          break;
        }
      }
      if(arPirminis){
        console.log(i + " yra pirminis");
      }
    }
  }
}

pirminiai(10,100);