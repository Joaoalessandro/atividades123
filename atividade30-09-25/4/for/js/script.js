const label = document.getElementById("outResposta");
const numeroInteiro = document.getElementById("inNumeroInteiro");

function onButtonVerificarPressed() {
    const numero = parseInt(numeroInteiro.value);
    
    let lista = [];
    if (isNaN(numero) || numero <= 0) {
        return;
    }
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            lista.push(i);

        }
    }
     if(lista.length > 2){
    label.innerHTML = 'Não é primo:';
    }else{
    label.innerHTML = 'É primo:';
    }
}