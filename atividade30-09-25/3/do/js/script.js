const label = document.getElementById("outResposta");
const numeroInteiro = document.getElementById("inNumeroInteiro");

function onButtonVerificarPressed() {
    let contador = 1;
    const numero = parseInt(numeroInteiro.value);
    if (isNaN(numero) || numero <= 0) {
        label.innerHTML = "Por favor, insira um número inteiro positivo válido.";
        return;
    }
    let respostaTexto = '**Divisores de ' + numero + ': **<br>';
    do{
        if (numero % contador === 0) {
            respostaTexto += contador + " é divisor<br>";

        }
        contador ++;
    }while(contador <= numero);
    label.innerHTML = respostaTexto;
}