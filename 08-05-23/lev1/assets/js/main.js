// lev 1_1

let person = ["Jenny", "Dreger", "Künstlerin"];
let friends = ["Amira", "Felix", "Mel"];
let favoriteFood = ["Curry", "Roter Reis", "Ofengemüse"];

// console.log({person}, {friends}, {favoriteFood});
console.log(person, friends, favoriteFood);

// lev 1_2

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

// lev 1_3

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

// lev 1_4

console.log(person.push("cool"));
console.log(person.push("wohlhabend"));
console.log(person);
console.log(friends.push("Marie", "Sani"));
console.log(friends);
console.log(favoriteFood.push("Nudelauflauf", "Fried Rice"));
console.log(favoriteFood);

// lev 1_5

console.log(person);
let lastValuePerson = person.pop();
console.log(lastValuePerson);
console.log(person);

console.log(friends);
let lastValueFriends = friends.pop();
console.log(lastValueFriends);
console.log(friends);

console.log(favoriteFood);
let lastValueFood = favoriteFood.pop();
console.log(lastValueFood);
console.log(favoriteFood);

// lev 1_6

console.log(person);
let firstValuePerson = person.shift();
console.log(firstValuePerson);
console.log(person);

// lev 1_7

console.log(friends);
console.log(friends.unshift("Sani"));
console.log(friends.unshift("Ele"));
console.log(friends);

console.log(favoriteFood);
console.log(favoriteFood.unshift("Tofu", "Blumenkohl"));
console.log(favoriteFood);

// lev 1_8

let reise = ["Brasilien", "Bali", "Island", "Kroatien"];

console.log(reise);

console.log(reise.slice(0, 1), reise.slice(2,3));

// lev 1_10

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

let split1 = text.split("");
console.log(split1);

let split2 = text.split(" ");
console.log(split2);

let split3 = text.split(".");
console.log(split3);