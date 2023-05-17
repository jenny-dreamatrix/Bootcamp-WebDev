
let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

// names

let metalNames = [];

edelMetallPreise.forEach(metal => {
   console.log(metal.name);
   metalNames.push(metal.name);
})

console.log(metalNames);

edelMetallPreise.map(metal => {
    console.log(metal.name);
})

// preise

let preise = [];

edelMetallPreise.forEach(metal => {
    console.log(metal.preiseGramEuro);
    preise.push(metal.preiseGramEuro);
})

console.log(preise);

edelMetallPreise.map(metal => {
    console.log(metal.preiseGramEuro);
})

// veränderung

let aenderung = [];

edelMetallPreise.forEach(metal => {
    console.log(metal.veraenderung);
    aenderung.push(metal.veraenderung);
})

console.log(aenderung);

edelMetallPreise.map(metal => {
    console.log(metal.veraenderung);
})

// preise über 50

// const checkPreise = (preis) => {
//     return preis > 50;
// }
// const result = preise.filter(checkPreise);
// console.log(result);

const checkPreise = (metal) => { 
    return metal.preiseGramEuro > 50;
}

const ergebnis = edelMetallPreise.filter(checkPreise);
console.log(ergebnis);

// tabelle

const tabelleAußen = `<table><tr>
    <th>Name</th>
    <th>PreiseGrammEuro</th>
    <th>Veränderung</th>
    </tr></table>`;
document.body.insertAdjacentHTML("afterbegin", tabelleAußen);

const außen = document.querySelector("table");

edelMetallPreise.forEach(metal => {
    const tabellenabschnitt = `<tr>
        <td>${metal.name}</td>
        <td>${metal.preiseGramEuro}</td>
        <td>${metal.veraenderung}</td>
    </tr>`;
    außen.insertAdjacentHTML("beforeend", tabellenabschnitt);
})