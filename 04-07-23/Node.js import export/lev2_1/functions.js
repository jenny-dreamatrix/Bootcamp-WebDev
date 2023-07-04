import { data } from "./data.js";

// mehr als 100000 Einwohner:
export const grosseStaedte = () => {
const filteredArray = [...data].filter((stadt) => stadt.population > 100000)
console.log(filteredArray);
}

// weniger als 100000 Einwohner:
export const kleineStaedte = () => {
    const filteredArray = [...data].filter((stadt) => stadt.population < 100000)
    console.log(filteredArray);
}