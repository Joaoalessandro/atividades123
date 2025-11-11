let labelArrays = document.getElementById('outArray');
let outFatorial = document.getElementById('outFatorial');

function geraNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function obterConjuntoAleatorio() {
    let conjunto = [];
    for (let i = 0; i < 10; i++) {
        conjunto.push(geraNumeroAleatorio());
    }
    return conjunto;
}

function ordenarLista(listaNumeros) {
    let tamanhoLista = listaNumeros.length;

    for (let passada = 0; passada < tamanhoLista - 1; passada++) {
        for (let indice = 0; indice < tamanhoLista - passada - 1; indice++) {

            if (listaNumeros[indice] > listaNumeros[indice + 1]) {

                let valorTemporario = listaNumeros[indice];

                listaNumeros[indice] = listaNumeros[indice + 1];
                listaNumeros[indice + 1] = valorTemporario;

            }
        }
    }
    return listaNumeros;
}

function intercalarConjuntosEmOrdemCrescenteComLoop(conjunto1, conjunto2) {
    let conjuntoIntercalado = [];
    let ponteiro1 = 0;
    let ponteiro2 = 0;

    while (ponteiro1 < conjunto1.length && ponteiro2 < conjunto2.length) {
        if (conjunto1[ponteiro1] < conjunto2[ponteiro2]) {
            conjuntoIntercalado.push(conjunto1[ponteiro1]);
            ponteiro1++;
        } else {
            conjuntoIntercalado.push(conjunto2[ponteiro2]);
            ponteiro2++;
        }
    }
    return conjuntoIntercalado;
}

function onButtonGerar() {
    const vetor = ordenarLista(obterConjuntoAleatorio());
    const vetor2 = ordenarLista(obterConjuntoAleatorio());
    labelArrays.innerText = 'Array 1: ' + vetor.join(', ') + '\nArray 2: ' + vetor2.join(', ');
    outFatorial.innerHTML = '<Strong>Intercalação: ' + intercalarConjuntosEmOrdemCrescenteComLoop(vetor, vetor2).join(', ') + '</Strong>';
}