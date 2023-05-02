
const article = document.querySelector("article");
const output = document.querySelector(".output");


function highlight(){
    // die <span> Elemente und den output Text aus der vorherigen Suche entfernen, alles wieder zurücksetzen auf ursprünglichen Zustand
    article.innerHTML = article.innerHTML.replaceAll("<span>", " ");
    output.innerHTML = " ";

    // input Suchfeld auslesen
    let search = document.querySelector("#search-input").value;
    console.log(search);

    // überprüfen, ob in dem Text des articles das Suchwort enthalten ist - als Variable
    let result = article.innerText.includes(search);
    console.log(result);

    // wenn das Suchwort enthalten ist,..
    if(result == true){
        let addSpan = "<span>" + search + "</span>";

        console.log(article.innerHTML);  

        // alle search Ergebnisse ersetzen und in der Konsole überprüfen ob die Änderungen übernommen wurden
        let replaced = article.innerHTML.replaceAll(search, addSpan);
        console.log(replaced);

        // das innerHTML überschreiben
        article.innerHTML = article.innerHTML.replaceAll(search, addSpan);
    } else {
        output.innerHTML = "Keine Ergebnisse gefunden.";
    }
}