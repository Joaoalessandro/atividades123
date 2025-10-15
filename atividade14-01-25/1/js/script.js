function eCapicua(numero) {
    if (numero < 0) return false;

    let original = numero;
    let invertido = 0;

    while (numero > 0) {
        let digito = numero % 10;
        invertido = invertido * 10 + digito;
        numero = Math.trunc(numero / 10);
    }

    return original === invertido;
}

function onButtonPressed() {
    let numeroEntrada = Number(document.getElementById('inNumero').value);
    const textoResposta = document.getElementById('outResposta');
    textoResposta.innerText = `O número ${numeroEntrada} ${eCapicua(numeroEntrada) ? 'é capicua' : 'não é capicua'}`;
}
