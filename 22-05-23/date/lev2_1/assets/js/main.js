
const datumAnzeige = () => {
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
month++;
let year = date.getFullYear();

// console.log({day}, {month}, {year});

if(month < 10){
    month = month.toString();
    month = `0${month}`
}

if(day < 10){
    day = day.toString();
    day = `0${day}`
}

document.write(`${day}-${month}-${year}`)
}

datumAnzeige();