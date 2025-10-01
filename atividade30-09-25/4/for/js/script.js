const label = document.getElementById("outResposta");
const numeroInteiro = document.getElementById("inNumeroInteiro");

function onButtonVerificarPressed() {
    const numero = parseInt(numeroInteiro.value);
    
    let quantosDivisores = 0;;
    if (isNaN(numero) || numero <= 0) {
        return;
    }
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
           quantosDivisores ++;

        }
    }
     if(quantosDivisores > 2){
    label.innerHTML = 'Não é primo:';
    }else{
    label.innerHTML = 'É primo:';
    }
}