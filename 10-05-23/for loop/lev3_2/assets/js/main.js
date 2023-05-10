// lev 3_2

let numArr = [5, 22, 15, 100, 55];

numArr.forEach((elm) => {

    for (let i = 2; i < elm; i++){
        
        if (elm % i === 0){
            let ergebnis = elm / i;
            console.log(`${elm} lässt sich durch ${i} teilen! Das Ergebnis ist ${ergebnis}`);
            document.write(`<p>${elm} lässt sich durch ${i} teilen! Das Ergebnis ist ${ergebnis}</p>`);
        }
    }
})