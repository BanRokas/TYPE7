let masyvas = [];
for(let i = 1; i <= 20; i++){
  masyvas.push(i);
}

/* 1 uzd */
console.groupCollapsed("1 uzd");
for(let i = 0; i < masyvas.length; i++){ // i++ == i=i+1 == i+=1
  console.log(masyvas[i]);
}
console.groupEnd();

/* 2 uzd */
console.groupCollapsed("2 uzd");
for(let i = 0; i < masyvas.length; i+=3){ // i=i+3 == i+=3
  console.log(masyvas[i]);
}
/*for(let i = 0; i < masyvas.length; i++){
  if(i % 3 == 0 && i != 0){
    console.log(masyvas[i]);
  }
}*/
console.groupEnd();

/* 3 uzd */
console.groupCollapsed("3 uzd");
for(let i = masyvas.length-1; i >= 0 ; i-=2){ // i=i-2 == i-=2
  console.log(masyvas[i]);
}
console.groupEnd();

/* 4 uzd */
console.groupCollapsed("4 uzd");
for(let i = 0; i < masyvas.length; i++){
  if(masyvas[i] > 12){
    console.log(masyvas[i]);
  }
}
console.groupEnd();

/* 5 uzd */
console.groupCollapsed("5 uzd");
console.log("Lyginiai:");
for(let i = 0; i < masyvas.length; i++){
  if(masyvas[i] % 2 === 0){
    console.log(masyvas[i]);
  }
}
console.log("Nelyginiai:");
for(let i = 0; i < masyvas.length; i++){
  if(masyvas[i] % 2 !== 0){
    console.log(masyvas[i]);
  }
}
console.groupEnd();