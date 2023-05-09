// lev 1_1

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

let getraenkeSort = getraenke.sort();
console.log(getraenkeSort);

// ENTWEDER SO:

// getraenkeSort.forEach((elm) => {
//     console.log(elm);
//     document.write("<p>" + elm + "</p>");
// });


// ODER SO:

const myDrinks = (elm) => {
    console.log(elm);
    document.write("<p>" + elm + "</p>");
}

getraenkeSort.forEach(myDrinks);



// lev 1_5

let checkNumber = [
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

const rechnung = (a) => {
    if (a % 3 === 0){
        console.log(a + 100);
        return a + 100;
    } else {
        return a;
    }
}

let checkNumberNew = checkNumber.map(rechnung);
console.log(checkNumber);
console.log(checkNumberNew);


// lev 1_6


let album = [
    "holidays.jpg",
 "Restaurant.jpg",
 "desktop",
 "rooms.GIF",
 "DOGATBEACH.jpg",
];

// zuerst als neues Album mit kleinbuchstaben speichern

let album2 = album.map((elm) => elm.toLowerCase());
console.log(album2);

// Funktion mit if else statements um die Endungen abzufragen 

const bearbeitung = (dateiname) => {
    if(dateiname.includes(".jpg") == true){
        console.log(dateiname.replace(".jpg", ""));
        return dateiname.replace(".jpg", "");
    } else if (dateiname.includes(".gif") == true){
        console.log(dateiname.replace(".gif", ""));
        return dateiname.replace(".gif", "");
    } else {
        console.log("invalid");
        return "invalid";
    }
}

// Funktion für jedes Element anwenden

album2.map(bearbeitung);

// als neues Array speichern

let albumNew = album2.map(bearbeitung);
console.log(albumNew);