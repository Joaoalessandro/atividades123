function base10ParaBase2(numero) {
    let binario = 0;
    let multiplicador = 1;
    
    while (numero > 0) {
        let resto = numero % 2;
        binario = resto * multiplicador + binario;
        multiplicador *= 10;
        numero = Math.trunc(numero / 2);
    }
    
    return binario;
}


function onButtonPressed() {
    let numeroEntrada = Number(document.getElementById('inNumero').value);
    const textoResposta = document.getElementById('outResposta');
    textoResposta.innerText = `${base10ParaBase2(numeroEntrada)}`;
}
