let labelArrays = document.getElementById('outArray');
let outInvertidos = document.getElementById('outInvertidos');

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

function inverterNumero(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function onButtonGerar() {
    const vetor = obterConjuntoAleatorio();
    labelArrays.innerText = 'Array: ' + vetor.join(', ');

    let invertidosHTML = '<ul class="list-group mt-2">';
    vetor.forEach((num, i) => {
        invertidosHTML += `<li class="list-group-item">Posição ${i} => ${num} => invertido: ${inverterNumero(num)}</li>`;
    });
    invertidosHTML += '</ul>';

    outInvertidos.innerHTML = invertidosHTML;
}
