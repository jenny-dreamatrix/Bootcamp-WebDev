function berechnungAlter(){

    const outputAge = document.querySelector(".output-age");

    let yearOfBirth = Number(document.querySelector(".year").value);

    outputAge.innerHTML = 2023-yearOfBirth;
}
