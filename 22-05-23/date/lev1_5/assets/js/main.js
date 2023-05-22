
let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const monatsName = (year,month,day) => {
month --;
let date = new Date(year,month,day);
let monthIndex = date.getMonth();
console.log(list[monthIndex]);
}

monatsName(2022,05,12);
monatsName(2001,3,4);
monatsName(2019,12,24);
monatsName(1410,07,15);