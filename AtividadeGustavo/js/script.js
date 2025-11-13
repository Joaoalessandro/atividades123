function tocarSom() {
    const contador = document.getElementById("contador");
    let count = parseInt(contador.value);
    count *= -1;

    const audios = document.querySelectorAll("audio");
    audios.forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    if (count === 1) {
        const audio = document.getElementById("audioCaneta");
        if (audio) audio.play();
    }

    contador.value = count;
}

function incrementaNum() {
    let label = document.getElementById("contadorLabel");
    let atual = parseInt(label.textContent);
    label.textContent = atual + 1;
}

function diminuiNum() {
    let label = document.getElementById("contadorLabel");
    let atual = parseInt(label.textContent);
    label.textContent = atual - 1;
}

let botao = document.getElementById("btnContador");

botao.addEventListener('mousedown', function (e) {
    e.preventDefault();

    if (e.button === 0) {
        incrementaNum();
    } else if (e.button === 2) {
        diminuiNum();
    }
});

botao.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
