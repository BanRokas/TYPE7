let asmuo = {
  vardas : "Rokas",
  pavarde : "Banaitis",
  amzius : 25,
  alkanas : true,
  gyvenamojiVieta : {
    planeta : "Žemė",
    zemynas : "Europa",
    salis : "Lietuva",
    miestas : "Kaunas"
  },
  pomegiai : ["sportas","programavimas","games","filmai"],
  pasisveikinimas : () => {
    console.log("ALOHA");
  }
}

console.log("Object: ",asmuo);

// JSON - Java Script Object Notation

asmuo = JSON.stringify(asmuo);

console.log("JSON.stringify: " + asmuo);

// JSON nuo Object skiriasi tuo, kad JSON'e: 
//    viskas paversta i teksta
//    keys irgi rasosi kabutese
//    negali buti metodu/funkciju

asmuo = JSON.parse(asmuo);

console.log("JSON.parse: ",asmuo);

let asmenys = [
  {
    name : "Rokas",
    amzius : 25
  },{
    name : "Petriukas",
    amzius : 7
  },{
    name : "Kazimieras",
    amzius : 35
  }
];
console.log(JSON.stringify(asmenys));

//          JS faile esanti info
let output = "";
asmenys.forEach(asmuo => {
  output += `
    <div>
      <span>${asmuo.name} yra ${asmuo.amzius} metų amžiaus.</span>
    </div>
  `;
});
document.querySelector("#asmenys").innerHTML = output;

//        txt su XMLHttpRequest
let xhttpTXT = new XMLHttpRequest();
xhttpTXT.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    document.querySelector("#txtInfoOld").innerHTML = xhttpTXT.responseText;
  }
}
xhttpTXT.open("GET", "data/data.txt", true);
xhttpTXT.send();

//        JSON su XMLHttpRequest
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    const data = JSON.parse(xhttp.responseText);
    let output = "";
    data.forEach(data0 => {
      output += `
        <div>
          <span>${data0.name} yra ${data0.amzius} metų amžiaus.</span>
        </div>
      `;
    });
    document.querySelector("#jsonInfoOld").innerHTML = output;
  }
}
xhttp.open("GET", "data/data.json", true);
xhttp.send();

//        txt su fetch
fetch("data/data.txt")
  .then(function(res){
    return res.text();
  })
  .then(function(data){
    document.querySelector("#txtInfoFetch").innerHTML = data;
  })
  .catch(function(error){
    document.querySelector("#txtInfoFetch").innerHTML = `
      ${error}
    `;
  });

//        JSON su fetch
fetch("data/data.json")
  .then( res => res.json() )
  .then( data => fillOutput(data))
  .then( output => document.querySelector("#jsonInfoFetch").innerHTML = output)
  .catch(err => document.querySelector("#jsonInfoFetch").innerHTML = `
    Deja susidūrėme su error'u. Štai jo žinutė: ${err}.
  `);

let fillOutput = (data) =>{
  let returnInfo = "";
  data.forEach(data0 => {
    returnInfo += `
      <div>
        <span>${data0.name} yra ${data0.amzius} metų amžiaus.</span>
      </div>
    `;
  });
  return returnInfo;
}