// lev 1_2 ----------------------------------------------------

const person = {
    name: "Jenny",
    alter: 31,
    sagNameAlter: () => {
        // alert(`${person.name}: ${person.alter}`);
        return `${person.name}: ${person.alter}`;
    }
}

console.log(person.sagNameAlter());


// lev 1_4 ----------------------------------------------------

let unsereHaustiere = [
    {
      tiertyp: "Katze",
      names: [
        "Gipsy",
        "Nala",
        "Dinky"
      ]
    },
    {
      tiertyp: "Hunde",
      names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
      ]
    }
];

// Nala
console.log(unsereHaustiere[0].names[1]);
// Droopy
console.log(unsereHaustiere[1].names[2]);

// alle Namen
console.log(unsereHaustiere[0].names , unsereHaustiere[1].names);

// oder so:
// unsereHaustiere.forEach(tiertyp => {
//     console.log(tiertyp.names);
// })

// Namen ändern
unsereHaustiere[0].names = ["Balu", "Snoopy"];
console.log(unsereHaustiere[0].names);

// oder so:
// unsereHaustiere[0]["names"] = ["Balu", "Snoopy"];
// console.log(unsereHaustiere[0]["names"]);


// lev 1_5 ----------------------------------------------------


let unserLager = {
    schreibtisch: {
      schublade: "Hefter"
    },
    schrank: {
      "Obere Schublade": {
        Ordner1: "Dokumente",
        Ordner2: "Geheimnisse"
      },
      "Untere Schublade": "Cola"
    }
};

// Geheimnisse
console.log(unserLager["schrank"]["Obere Schublade"]["Ordner2"]);
// Cola
console.log(unserLager["schrank"]["Untere Schublade"]);
// Hefter
console.log(unserLager["schreibtisch"]["schublade"]);


// lev 1_7 ----------------------------------------------------


let myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      release_year: 1969,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      release_year: 1978,
      medium: ["CS", "CD", "LP", "Download"],
      gold: true
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      release_year: 1971,
      medium: ["CS", "LP", "Download"],
      gold: true
    },
    {
      artist: "Metallica",
      title: "Kill ’Em All und Ride the Lightning",
      release_year: 1983,
      medium: ["LP", "CD", "MC", "Download"],
      gold: true
    }
];
  
myMusic.forEach(album => {
    console.log(album.artist);
    console.log(album.title);
    console.log(album.medium);

    if(album.release_year > 1975){
        console.log(album.release_year);
    }
})

// lev 1_8 ----------------------------------------------------


let studentData = [
    {
      name: "Alex",
      age: 23,
      coop: false,
      address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
      },
      emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
      name: "Sandra",
      age: 22,
      coop: true,
      address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
      },
      emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach(student => {
    console.log(student.name);
    console.log(student.coop);
    console.log(student.address.city);
    console.log(student.emails);
})
