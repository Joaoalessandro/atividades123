function identificarTriangulo() {
    let inLadoA = Number(document.getElementById("inLadoA").value);
    let inLadoB = Number(document.getElementById("inLadoB").value);
    let inLadoC = Number(document.getElementById("inLadoC").value);
    let outResposta = document.getElementById("outResposta");

    if (inLadoA <= 0 || inLadoA == 0
        || inLadoB == 0 || inLadoC == 0 || inLadoB <= 0 || inLadoC <= 0) {
        outResposta.innerText = "Lados inválidos";
    } else if (Math.pow(inLadoA, 2) == Math.pow(inLadoB, 2) + Math.pow(inLadoC, 2)) {
            outResposta.innerText = "Triângulo Retângulo";
        } else if (Math.pow(inLadoA, 2) > Math.pow(inLadoB, 2) + Math.pow(inLadoC, 2)) {
            outResposta.innerText = "Triângulo Obtusângulo";
        } else {
            outResposta.innerText = "Triângulo Acutângulo";
        }
}

