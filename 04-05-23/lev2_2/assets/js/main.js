
const randomNum1_10 = Math.floor(Math.random()* 10 +1);
console.log(randomNum1_10);

// window.prompt("Schätze eine Zahl zwischen 1 und 10");

check = prompt("Schätze eine Zahl zwischen 1 und 10", '');

if (check != randomNum1_10) {
	console.log("Du hast verloren! Die Nummer lautet " + randomNum1_10 );
	alert("Du hast verloren! Die Nummer lautet " + randomNum1_10 );
} else {
	console.log("Du hast richtig geraten!");
	alert("Du hast richtig geraten!");
}
