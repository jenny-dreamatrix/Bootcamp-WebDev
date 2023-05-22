
date1 = new Date(1999, 10, 5, 15)
date2 = new Date()
date3 = new Date(2019, 12, 3, 12)
date4 = new Date(2000, 1, 1, 11)

const checkPeriod = (date) => {
console.log(date);

let hours = date.getHours();
console.log(hours);

let period = hours < 12 ? "AM" : "PM";
console.log(period);
}

checkPeriod(date1);
checkPeriod(date2);
checkPeriod(date3);
checkPeriod(date4);