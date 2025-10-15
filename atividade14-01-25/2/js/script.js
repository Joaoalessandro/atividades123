function calcular() {
    let acuracidade = 1;
    let valorPi = 0;
    let contador = 1;
    let sinal = 1;
    
    while(acuracidade > 0.0001){
        valorPi += (4 / contador) * sinal;
        sinal *= -1;
        acuracidade = 4/contador;
        contador += 2;
    }
    return `Valor de π calculado:\n${valorPi}`;
}

function onButtonPressed() {
    const textoResposta = document.getElementById('outResposta');
    textoResposta.innerText = calcular();
}
