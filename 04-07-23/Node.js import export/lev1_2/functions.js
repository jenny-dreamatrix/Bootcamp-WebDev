import { names, numbers } from "./data.js";

// erstes Element:
export const erstes = () => {
    console.log(`erster Name: ${names[0]}`);
    console.log(`erste Zahl: ${numbers[0]}`);
}

// alle außer dem letzten Element:
export const ohneLetztes = () => {
    const popNames = [...names]
    popNames.pop()
    console.log(`ohne letzten Namen: ${popNames}`)
    const popNumbers = [...numbers]
    popNumbers.pop()
    console.log(`ohne letzte Zahl: ${popNumbers}`)
}

// letztes Element:
export const letztes = () => {
    const letzterName = [...names]
    console.log(`letzter Name: ${letzterName.pop()}`)
    const letzteZahl = [...numbers]
    console.log(`letzte Zahl: ${letzteZahl.pop()}`)
}

// alle außer dem ersten Element:
export const ohneErstes = () => {
    const shiftNames = [...names]
    shiftNames.shift()
    console.log(`ohne ersten Namen: ${shiftNames}`)
    const shiftNumbers = [...numbers]
    shiftNumbers.shift()
    console.log(`ohne erste Zahl: ${shiftNumbers}`)
}

// bestimmtes Element entfernen:
export const entferneBestimmtesElement = (gegebenesArray, entfernen) => {
    const neuesArray = gegebenesArray.filter((elm) => elm !== entfernen)
    console.log(`bestimmtes Element entfernen: ${neuesArray}`)
}

// doppelte Werte entfernen:
export const doppelteWerteEntfernen = (input) => {
let neuesArray = [...input]

for(let i = 0; i <= 10; i++){
    console.log(neuesArray.indexOf(i))

    if (neuesArray.indexOf(i) !== -1){
        let indexOfFirstNum = neuesArray.indexOf(i)
        let startIndex = indexOfFirstNum + 1

        // weiter suchen hinter dem ersten Treffer:
        if(neuesArray.indexOf(i, startIndex) !== -1){
            console.log(`die doppelte Zahl lautet ${i}`);
            let indexOfSecondNum = neuesArray.indexOf(i, startIndex)
            neuesArray.splice(indexOfSecondNum, 1)
        }
    }
}
console.log(neuesArray);
}

// Summe von numbers:
export const summe = () => {
    let summe = 0;

    for (let i = 0; i < numbers.length; i++){
        summe += numbers[i]
    }
    console.log(summe);
}

// zufällige Zahl zwischen zwei Parametern:
export const zufall = (a, b) => {
    if (a < b) {
        let zufallsZahl = Math.floor(Math.random() * (b - a + 1) + a );
        console.log(zufallsZahl);
    } else if (a > b) {
        let zufallsZahl = Math.floor(Math.random() * (a - b + 1) + b );
        console.log(zufallsZahl);
    }
}

// erster Buchstabe groß:
export const ersterBuchstabeGross = (string) => {
    let newString = string[0].toUpperCase()
    newString = string.replace(string[0], newString)
    console.log(newString);
}

// gesamter Text in Großbuchstaben:
export const allesGross = (string) => {
    let newString = string.toUpperCase()
    console.log(newString);
}

// stimmt der letzte Buchstabe von Parameter1 mit Parameter2 überein?
export const checkBuchstabe = (string, buchstabe) => {
   let indexOfletzterBuchstabe = string.length -1
   console.log(string[indexOfletzterBuchstabe].includes(buchstabe))
}