const label = document.getElementById("outResposta");
const numeroInteiro = document.getElementById("inNumeroInteiro");

function onButtonVerificarPressed() {
    let contador = 1;
    const numero = parseInt(numeroInteiro.value);
    let quantosDivisores = 0;
    if (isNaN(numero) || numero <= 0) {
        return;
    }
    do{
        if (numero % contador === 0) {
            quantosDivisores ++;
        }
        contador ++;
    }while(contador <= numero);
    if(quantosDivisores > 2){
    label.innerHTML = 'Não é primo:';
    }else{
    label.innerHTML = 'É primo:';

    }
}