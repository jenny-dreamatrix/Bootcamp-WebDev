import { arrayCars } from "./data.js";
import { arrayNumbers } from "./data.js";

// Version mit default export:
// const Function = () => {
// const sortedCars = arrayCars.sort()
// const sortedNumbers = arrayNumbers.sort()
// console.log(sortedCars);
// console.log(sortedNumbers);
// }
// export default Function;

// Version mit spezifischem export:
export const sortingData = () => {
console.log(arrayCars.sort());
console.log(arrayNumbers.sort());
}