const label = document.getElementById("outResposta");
const numeroInteiro = document.getElementById("inNumeroInteiro");

function onButtonVerificarPressed() {
    let contador = 1;
    const numero = parseInt(numeroInteiro.value);
    let lista = [];
    if (isNaN(numero) || numero <= 0) {
        return;
    }
    do{
        if (numero % contador === 0) {
            lista.push(contador);
        }
        contador ++;
    }while(contador <= numero);
    if(lista.length > 2){
    label.innerHTML = 'Não é primo:';
    }else{
    label.innerHTML = 'É primo:';

    }
}