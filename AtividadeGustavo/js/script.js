function tocarSom(id) {
    //array de todos os audios da pagina para parar
const audio = document.getElementById("audioCaneta");
    const audios = document.querySelectorAll("audio");

    audios.forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    if (audio) {
        audio.play();
    }
}
