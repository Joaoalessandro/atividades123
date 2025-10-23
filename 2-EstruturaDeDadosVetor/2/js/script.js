let labelArrays = document.getElementById('outArray');
let inNumero = document.getElementById('inNumero');
let resposta = document.getElementById('outResultado');

function geraNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;

}

function obterConjuntoAleatorio() {
    let conjuntoAleatorio = [];
    for (let index = 0; index < 15; index++) {
        conjuntoAleatorio.push(geraNumeroAleatorio());
    }
    return conjuntoAleatorio;
}

function onButtonGerar() {
    labelArrays.innerText = 'Array: ' + obterConjuntoAleatorio().join(', ');
}

function isOnArray(comparar, arrayNumeros) {
    for (numeros of arrayNumeros) {
        if (Number(numeros) == Number(comparar)) {
            return true;
        }
    }
    return false;
}

function onButtonVerificarNumero() {
    if (isOnArray(inNumero.value, labelArrays.textContent.split(':')[1].split(', '))) {
        resposta.innerText = 'Está no conjunto!';
    } else {
        resposta.innerText = 'Não está no conjunto!';

    }

}