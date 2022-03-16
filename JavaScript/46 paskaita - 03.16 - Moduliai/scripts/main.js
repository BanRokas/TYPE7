import Person, { sakykVarda as sayName, arPilnametis as isLegalAge } from "./modulis.js";

let zmogus0 = new Person("Rokas", 25);
console.log(zmogus0);
sayName(zmogus0);
isLegalAge(zmogus0);