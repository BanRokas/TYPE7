/*
                  neiteraciniai Array metodai:
  masyvas.concat(value0, value1, value2...) - grąžina prie masyvas prikabintus kitus array'jus
  masyvas.fill(value, start, end) - užpildo masyvas vidų riekšmėmis value nuo start pozicijos iki end pozicijos.
  masyvas.includes(value, fromIndex) - grąžina atsakymą ar masyvas viduje yra reikšmė value nuo indekso fromIndex(nebūtinas)
  masyvas.indexOf(searchElement, fromIndex) - grąžina indeksą, kurioje vietoje randamas pirmasis searchElement elementas, nuo indekso fromIndex(nebūtinas)
  masyvas.lastIndexOf() - more or less same kaip ir ^
  masyvas.join(separator) - grąžina String'ą, kuriame yra masyvo elementai sujungti separator'iumi.
  masyvas.reverse() - apsuka masyvas elementus.
  masyvas.pop() - išima elementą iš masyvo galo
  masyvas.shift() - išima elementą iš masyvo pradžios
  masyvas.push(value) - prideda value prie masyvo galo
  masyvas.unshift(value) - prideda value prie masyvo pradžios
  masyvas.slice(start, end) - grąžina iš masyvo elementus nuo start pozicijos iki end pozicijos
  masyvas.splice(start, deleteCount, item1, item2...) - 
  masyvas.sort(function)
  sort() - išrikiuoja abecelės tvarka.
    Su skaičiais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant "function(a,b){return a-b}".
    Su lietuviškai simboliais atsiranda problema. Ją reikia spręsti skliausteliuose pridedant "function(a,b){return a.localeCompare(b)}".

*/

[1,2,3,4,5].concat([4,5,6,7],[6,7,8,9]); // [1,2,3,4,5,4,5,6,7,6,7,8,9]
[1,2,3,4,5].fill("O", 2, 4); // [1,2,"O","O",5]
["dog","cat","cow","wolf","beer"].includes("dog"); // true
["dog","cat","cow","wolf","beer"].indexOf("dog"); // 0
["ėjo","Petriukas","takeliu","į","mokyklą"].join(" "); // 'ėjo Petriukas takeliu į mokyklą'
[1,2,3,4,5].reverse(); // [5,4,3,2,1]
[1,2,3,4,5].slice(2,4); // [3,4]
[1,2,3,4,5].splice(1,2,9,8,7,6,5,4); // [1,9,8,7,6,5,4,4,5]

