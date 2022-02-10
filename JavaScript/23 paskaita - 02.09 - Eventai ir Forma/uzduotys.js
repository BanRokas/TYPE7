/*  FizzBuzz
  1-100
  Fizz - jeigu skaičius dalinasi iš 3 be liekanos
  Buzz - jeigu iš 5 be liekanos
  FizzBuzz - jeigu iš 3 ir 5 be liekanos
  skaičius - kitais atvejais
*/

function fizzBuzz(nuo, iki, fizz, buzz){
  for(let i = nuo; i <= iki; i++){
    if(i % (fizz*buzz) == 0) {
      console.log("FizzBuzz");
    } else if(i % buzz == 0) {
      console.log("Buzz");
    } else if(i % fizz == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }  
  }
}
fizzBuzz(5, 60, 2, 7);

/*
5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su 
  number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.
*/
let nrMas = [654,13,2168,496,16,51,1,651,6,519,1,321,323,16,846,13,21,61,5];
function rikiuotSkMasyva(mas){
  let grazinti = mas.sort(function(a,b){return a-b}).reverse();
  for(let i = 0; i < grazinti.length; i++){
    console.log(grazinti[i]);
  }
}
rikiuotSkMasyva(nrMas);

/*let buttons = document.querySelectorAll('button');
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", nespausk);
}
//document.querySelectorAll('button').forEach(labas => labas.addEventListener("click", nespausk));
*/

