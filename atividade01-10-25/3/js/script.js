function onButtonPressedGerar() {
    let resultado = document.getElementById('outResposta');
    let numero = document.getElementById('inNumero').value;
    let ehTriangular = false;
    for (let n = 1; n <= numero; n++) {
        let produto = n * (n + 1) * (n + 2);

        if (produto == numero) {
            ehTriangular = true;
            expressao = `${numero} = ${n} x ${
                n + 1
            } × ${
                n + 2
            }`;
            break;
        }

        if (produto > numero) {
            break;
        }
    }

    if (ehTriangular) {
        resultado.innerHTML = `Número Triangular<br>${expressao}`;
    } else {
        resultado.innerHTML = "Número não Triangular";
    }

}
