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


function intercalarConjuntos(conjunto1, conjunto2) {
    let conjuntoIntercalado = [];
    let ponteiro1 = 1;


    for (let i = 0; i <  Math.max(conjunto1.length, conjunto2.length) || i < conjunto2.length; i++) {
        if( ponteiro1 > 0) {
            conjuntoIntercalado.push(conjunto1[i]);
            ponteiro1 *= -1;
        }
        if(ponteiro1 < 0){
            conjuntoIntercalado.push(conjunto2[i]);
            ponteiro1 *= -1;
        }
    }
    return conjuntoIntercalado;
}

function onButtonGerar() {
    const vetor = obterConjuntoAleatorio();
    const vetor2 = obterConjuntoAleatorio();
    labelArrays.innerText = 'Array 1: ' + vetor.join(', ') + '\nArray 2: ' + vetor2.join(', ');
    outFatorial.innerHTML = '<Strong>Intercalação: ' + intercalarConjuntos(vetor, vetor2).join(', ') + '</Strong>';
}