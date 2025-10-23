let labelArrays = document.getElementById('outArray');
let resposta = document.getElementById('outResultado');

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

function verificaQuaisOsPrimos(arrayNumeros) {
    let arrayPrimos = [];
    for (let numero of arrayNumeros) {
        let ehPrimo = true;
        if (numero < 2) ehPrimo = false;
        else {
            for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
                if (numero % divisor === 0) {
                    ehPrimo = false;
                    break;
                }
            }
        }
        if (ehPrimo) arrayPrimos.push(numero);
    }
    return arrayPrimos;
}

function onButtonGerar() {
    const array = obterConjuntoAleatorio();
    labelArrays.innerText = 'Array: ' + array.join(', ');
    resposta.innerText = 'Primos: ' + verificaQuaisOsPrimos(array).join(', ');
}
