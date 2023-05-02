// lev1_1

let firstName = "Jenny";
let lastName = "Dreger";

console.log("firstName-length: " , firstName.length, "lastName-length: " , lastName.length);

let fullName = firstName.concat(" ", lastName);
console.log("lastName-length: " , fullName.length);


// lev1_2

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log("h ",txt.indexOf("h"));
console.log("Earth ",txt.indexOf("Earth"));
console.log("Moon ",txt.indexOf("Moon"));


// lev1_3

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log("; ",txt2.search(";"));
console.log("green ",txt2.search("green"));
console.log("blue ",txt2.search("blue"));


// lev1_4

const A = "Susi is going to codingschool";

let var1 = A.slice(0, 4);
console.log(var1);

let var2 = A.slice(5, 7);
console.log(var2);

let var3 = A.slice(5, 17) + A.slice(23, 29);
console.log(var3);

let var4 = A.slice(23, 29);
console.log(var4);

let var5 = A.slice(0, 8) + A.slice(23, 29);
console.log(var5);

document.write(var1 + "<br>" + var2 + "<br>" + var3 + "<br>" + var4 + "<br>" + var5 + "<br>");


// lev1_7

const text = "Sam is good at codingschool";

let replace1 = text.replace("good", "bad");
let replace2 = replace1.replace("codingschool", "school");
console.log(replace2);

let replace3 = text.replace("Sam", "Susi");
let replace4 = replace3.replace("codingschool", "school");
console.log(replace4);

let replace5 = text.replace("codingschool", "tennis");
console.log(replace5);

document.write(replace2 + "<br>" + replace4 + "<br>" + replace5 + "<br>");


// lev1_8

const text2 = "Sam is going to codingschool";

let text3 = text2.replace("codingschool", "school");
console.log(text3);

let uppLow1 = text3.toUpperCase();
console.log(uppLow1);
document.write(uppLow1 + "<br>");

let uppLow2 = text3.toLowerCase();
let uppLow2replace = uppLow2.replace("to", "at");
console.log(uppLow2replace);
document.write(uppLow2replace + "<br>");

let sam = text3.slice(0,4);
console.log(sam);

let isGoingTo = text3.slice(4,16);
console.log(isGoingTo);

let school = text3.slice(16,22);
console.log(school);

let samUpp = sam.toUpperCase();
let schoolUpp = school.toUpperCase();

console.log(samUpp, schoolUpp);
document.write(samUpp + isGoingTo + schoolUpp + "<br>");

let isGoingToUpp = isGoingTo.toUpperCase();
document.write(sam + isGoingToUpp + school + "<br>");

let isBig = text3.replace("is", "Is");
let goingBig = isBig.replace("going", "Going");
let toBig = goingBig.replace("to", "To");
let schoolBig = toBig.replace("school", "School");

console.log(schoolBig);
document.write(schoolBig + "<br>");


// lev1_9

const text4 = "Sam is going to school";
const text5 = "Susi";
const text6 = "and";
const text7 = "to the movie theater";

let result1 = text4.concat(" " , text6, " " , text7);
console.log(result1);
document.write(result1 + "<br>");

let result2 = text4.replace("school", "movie theater");
console.log(result2);
document.write(result2 + "<br>");

let text8 = text4.replace("is", "are");
let result3 = text5.concat(" ", text6, " ", text8);
console.log(result3);
document.write(result3 + "<br>");

let text9 = result3.replace("school", "gym");
let result4 = text9.concat(" ", text6, " ", text7);
console.log(result4);
document.write(result4 + "<br>");

let text10 = text4.replace("Sam", "Susi");
let result5 = text10.concat(" ", text6, " ", text7);
console.log(result5);
document.write(result5 + "<br>");


// lev1_11

let x = "Hello ";
let y = "World<br>";
let z = x + y;
document.write(z);

let n = x + " " + y;
document.write(n);

x += "World";
document.write(x);

let meinString = "ich bin Erster.";
meinString += " Ich komme auf Platz zwei.";
console.log(meinString);