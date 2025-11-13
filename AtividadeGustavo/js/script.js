function tocarSom() {
    const contador = document.getElementById("contador");
    let count = parseInt(contador.value);
    count *= -1;

    //array de todos os audios da pagina para parar
    const audio = document.getElementById("audioCaneta");
    const audios = document.querySelectorAll("audio");

    audios.forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
    if (count === 1) {
        if (audio) {
            audio.play();
        }
    }
    contador.value = count;
}
