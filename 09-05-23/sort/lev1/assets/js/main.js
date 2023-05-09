
//  lev 1_1


let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortierung = () => {
    languages = languages.sort();
}

sortierung();
console.log(languages);

//  lev 1_2

const sortierung2 = () => {
languagesReverse = languages.sort().reverse();
}
  
sortierung2();
console.log(languagesReverse);

//  lev 1_3

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort((a, b) => a - b));


//  lev 2_2

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

console.log(numArray2.sort((a, b) => a - b));
