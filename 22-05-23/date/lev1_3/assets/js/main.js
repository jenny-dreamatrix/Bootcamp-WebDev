
let date = new Date(2222, 9, 23, 13, 25, 11);
document.write(`<p>${date}</p>`);

date.setMonth(1);
date.setFullYear(2123);
date.setDate(24);
document.write(`<p>${date}</p>`);

date.setMonth(2);
document.write(`<p>${date}</p>`);

date.setDate(3);
document.write(`<p>${date}</p>`);

date.setDate(22);
date.setMonth(10);
date.setFullYear(2019);
document.write(`<p>${date}</p>`);