
let monate = [
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
  
let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

// übungsaufgabe

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let weekday = date.toLocaleString("default", {weekday: "long"});
let monthName = monate[month];

document.write(`<p>${date}</p><p>${year}</p><p>${month} Monat</p><p>${day} Tag</p><p>${hour} Stunde</p><p>${minute} Minute</p><p>${weekday}</p><p>${monthName}</p>`);

// digitale uhr

const dayOutput = document.querySelector(".day-output");
const hourOutput = document.querySelector(".hour-output");
const minutesOutput = document.querySelector(".minutes-output");
const secondsOutput = document.querySelector(".seconds-output");
const periodOutput = document.querySelector(".period-output");

let weekdayShort = date.toLocaleString("default", {weekday: "short"});
let seconds = date.getSeconds();
let period = hour < 12 ? "AM" : "PM";

if(hour < 10){
    hour = hour.toString();
    hour = `0${hour}`
}
if(minute < 10){
    minute = minute.toString();
    minute = `0${minute}`
}
if(seconds < 10){
    seconds = seconds.toString();
    seconds = `0${seconds}`
}

dayOutput.innerHTML = weekdayShort;
hourOutput.innerHTML = hour;
minutesOutput.innerHTML = minute;
secondsOutput.innerHTML = seconds;
periodOutput.innerHTML = period;