
const article = document.querySelector("article");
const output = document.querySelector(".output");


function highlight(){
    // die <span> Elemente und den output Text aus der vorherigen Suche entfernen, alles wieder zurücksetzen auf den ursprünglichen Zustand
    article.innerHTML = article.innerHTML.replaceAll("<span>", " ");
    output.innerHTML = " ";

    // input Suchfeld auslesen
    let search = document.querySelector("#search-input").value;
    console.log(search);

    // überprüfen, ob in dem Text des articles das Suchwort enthalten ist - als Variable speichern
    let result = article.innerText.includes(search);
    // gibt true oder false raus
    console.log(result);

    // wenn das Suchwort enthalten ist,..
    if(result == true){
        // Variable, die das Suchwort in <span> Element packt
        let addSpan = "<span>" + search + "</span>";

        // innerHTML im ursprünglichen Zustand
        console.log(article.innerHTML);  

        // alle search Ergebnisse ersetzen und in der Konsole überprüfen ob die Änderungen übernommen wurden
        let replaced = article.innerHTML.replaceAll(search, addSpan);
        console.log(replaced);

        // das innerHTML überschreiben
        article.innerHTML = article.innerHTML.replaceAll(search, addSpan);
        
        // wenn das Suchwort nicht enthalten ist,..
    } else {
        output.innerHTML = "Keine Ergebnisse gefunden.";
    }
}