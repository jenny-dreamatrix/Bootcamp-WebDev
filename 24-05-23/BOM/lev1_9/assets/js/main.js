const output = document.getElementById("txt");

const startTime = () => {
    const heute = new Date();
    const std = heute.getHours();
    const min = heute.getMinutes();
    const sec = heute.getSeconds();

    output.innerHTML = `<p>${heute}</p><div class="clock"><p>${std} :</p><p> ${min} :</p><p> ${sec}</p></div>`
}

setInterval(startTime, 1000);