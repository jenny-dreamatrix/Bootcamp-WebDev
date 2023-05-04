
// lev 1_1

const PI = Math.PI;
console.log(PI);

const roundedPI = PI.toFixed(2);
console.log(roundedPI);

// lev 1_2

let array = [
  3.14,
  193.4464,
  0.8596433607,
  -2.940629089,
];

function round(zahl) {
    console.log(Math.round(zahl));
}
// round(4.6675);

array.forEach(round);

// lev 1_3

const randomNum = Math.random();
console.log(randomNum);

const randomNum1_10 = Math.floor(Math.random()* 10 +1);
console.log(randomNum1_10);

const randomNum1_100 = Math.floor(Math.random()* 100+1);
console.log(randomNum1_100);

// lev 2_1

const roundTo = (Zahl, Genauigkeit) => {
    console.log(Zahl.toFixed(Genauigkeit));
}

roundTo(6.273445, 4);
roundTo(3.1415926535, 5);
