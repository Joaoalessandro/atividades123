let inNumero = document.getElementById("inNumero");
let resultadoLabel = document.getElementById("outResultado");

function onButtonAdicionarNumero() {
    let textoArrayNumeros = document.getElementById("outArray");

    let arrayNumeros = [];
    let arrayExistente = textoArrayNumeros.textContent;

    if (arrayExistente != "Array: ") {
        arrayNumeros = arrayExistente.split(": ")[1].split(", ").map(Number);
    }

    let numero = Number(inNumero.value);
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido diferente de zero.");
        inNumero.focus();
        return;
    }

    arrayNumeros.push(numero);
    textoArrayNumeros.innerText = `Array: ` + arrayNumeros.join(", ");
    inNumero.value = "";
    inNumero.focus();
}

function retornarAmplitude(arrayNumeros) {
    let maior = arrayNumeros[0];
    let menor = arrayNumeros[0];

    for (numeros of arrayNumeros) {
        if (numeros > maior) {
            maior = numeros;
        }
        if (numeros < menor) {
            menor = numeros;
        }
    }

    let amplitude = maior - menor;
    return amplitude;
}

function retornaArrayNumerico(arrayNumeros) {
    let textoArrayNumeros = document.getElementById("outArray");

    let arrayNumerico = [];
    for (textoArrayNumeros of arrayNumeros) {
        let numero = Number(textoArrayNumeros);
        if (!isNaN(numero)) {
            arrayNumerico.push(numero);
        }
    }
    return arrayNumerico;
}

function retornaMediaAritmetica(arrayNumeros) {
    let quantidadeNumeros = 0;
    let somaNumeros = 0;
    for (numeros of arrayNumeros) {
        somaNumeros += numeros;
        quantidadeNumeros++;
    }
    return somaNumeros / quantidadeNumeros;
}

function retornaConjuntoInverso(arrayNumeros) {
    let conjuntoInverso = [];
    let quantiaNumeros = arrayNumeros.length;
    for (let index = 0; index < quantiaNumeros; index++) {


        conjuntoInverso.push(arrayNumeros.pop());

    }
    return conjuntoInverso;
}

function onButtonCalcular() {
    let respostaTexto = "";
    let textoArrayNumeros = document.getElementById("outArray");

    let arrayExistente = [];
    arrayExistente = textoArrayNumeros.textContent.split(": ")[1].split(", ").map(Number);
    let arrayExistenteFormatado = retornaArrayNumerico(arrayExistente);

    if (arrayExistente == "Array: ") {
        alert("Adicione números ao array antes de calcular.");
        inNumero.focus();
        return;
    }

    let amplitude = retornarAmplitude(arrayExistenteFormatado);
    respostaTexto = `A amplitude do array é ${amplitude};`;
    respostaTexto += `\nA média aritmética é ${retornaMediaAritmetica(arrayExistenteFormatado)};`;
    respostaTexto += `\nA inversão do conjunto é ${retornaConjuntoInverso(arrayExistenteFormatado).join(', ')};`;

    resultadoLabel.innerText = respostaTexto;
}