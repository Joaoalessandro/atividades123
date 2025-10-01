const label = document.getElementById("outResposta");
const numeroInteiro = document.getElementById("inNumeroInteiro");

function onButtonVerificarPressed() {
    const numero = parseInt(numeroInteiro.value);
    if (isNaN(numero) || numero <= 0) {
        label.innerHTML = "Por favor, insira um número inteiro positivo válido.";
        return;
    }
    let respostaTexto = 'Divisores de ' + numero + ': <br>';
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            respostaTexto += i + " é divisor<br>";
        }
    }
    label.innerHTML = respostaTexto;
}   