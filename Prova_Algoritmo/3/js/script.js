function calcularRaizQuadrada() {
    let outResposta = document.getElementById("outResposta");

    let inNumero1 = Number(document.getElementById("inNumero").value);
    let passos = 0;
    let numerosImpares = 1;

    while (inNumero1 >= (numerosImpares)) {
        passos++;
        inNumero1 -= numerosImpares;
        numerosImpares += 2;
    }

    if (inNumero1 == 0) {
        outResposta.innerText = "Raíz: " + passos;
    } else {
        outResposta.innerText = "Raíz aproximada: " + passos;
    }
}