let labelArrays = document.getElementById('outArray');
let outFatorial = document.getElementById('outFatorial');

function geraNumeroAleatorio() {

    return Math.floor(Math.random() * 100) + 1;
}

function obterConjuntoAleatorio() {
    let conjunto = [];
    while (conjunto.length < 5) {
        let num = geraNumeroAleatorio();
        if (num <= 20 && num > 0) {
            conjunto.push(num);
        }
    }
    //for (let i = 0; i < 5; i++) { --- IGNORE ---
    //    conjunto.push(geraNumeroAleatorio()); --- IGNORE ---
    //} --- IGNORE ---
    return conjunto;
}

function verificarIgualdade(conjunto1, conjunto2) {
    if (conjunto1.length == conjunto2.length) {
        for (let i = 0; i < conjunto1.length; i++) {
            if (conjunto1[i] !== conjunto2[i]) {
                return 'Os arrays são diferentes.';
            }
        }
    }
    return 'Os arrays são iguais.';
}

function onButtonGerar() {
    const vetor = (obterConjuntoAleatorio().sort());
    const vetor2 = (obterConjuntoAleatorio().sort());
    labelArrays.innerText = 'Array 1: ' + vetor.join(', ') + '\nArray 2: ' + vetor2.join(', ');
    outFatorial.innerHTML = '<Strong>ProdutoEscalar: ' + verificarIgualdade(vetor, vetor2);
}