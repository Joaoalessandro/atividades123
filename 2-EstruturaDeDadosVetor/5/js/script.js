let labelArrays = document.getElementById('outArray');
let outFatorial = document.getElementById('outFatorial');

function geraNumeroAleatorio() {
    // números menores para não estourar no fatorial
    return Math.floor(Math.random() * 100) + 1;
}

function obterConjuntoAleatorio() {
    let conjunto = [];
    for (let i = 0; i < 10; i++) {
        conjunto.push(geraNumeroAleatorio());
    }
    return conjunto;
}

function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    let fat = 1;
    for (let i = 2; i <= n; i++) {
        fat *= i;
    }
    return fat;
}

function onButtonGerar() {
    const vetor = obterConjuntoAleatorio();
    labelArrays.innerText = 'Array: ' + vetor.join(', ');

    let fatorialHTML = '<ul class="list-group mt-2">';
    vetor.forEach((num, i) => {
        fatorialHTML += `<li class="list-group-item">Posição ${i} => ${num} => fatorial: ${fatorial(num)}</li>`;
    });
    fatorialHTML += '</ul>';

    outFatorial.innerHTML = fatorialHTML;
}