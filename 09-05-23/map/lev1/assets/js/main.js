// lev 1_2

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]

let upperDrinks = getraenke.map((drink) => drink.toUpperCase());
console.log(upperDrinks);


// lev 1_3

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];

const rechnen = (a) => {
return a * 2;
}

let zwischenergebnis = array.map(rechnen);
console.log(zwischenergebnis);
console.log(zwischenergebnis.sort((a, b) => a - b));


// lev 1_4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const umrechnungCelsius = (a) => {
let b = Math.round((a - 32) / 1.8);
console.log(b);
return b;
}

let celsius = fahrenheit.map(umrechnungCelsius);
console.log(celsius);
