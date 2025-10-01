const label = document.getElementById("outResposta");
const numeroInteiro = document.getElementById("inNumeroInteiro");

function onButtonVerificarPressed() {
    let contador = 1;
    const numero = parseInt(numeroInteiro.value);
    let lista = [];
    if (isNaN(numero) || numero <= 0) {
        return;
    }
    let respostaTexto = 'Divisores de ' + numero + ': <br>';
    while(contador <= numero){
        if (numero % contador === 0) {
            lista.push(contador);
        }
        contador ++;
    };
   if(lista.length > 2){
    label.innerHTML = 'Não é primo:';
    }else{
    label.innerHTML = 'É primo:';
    }
}