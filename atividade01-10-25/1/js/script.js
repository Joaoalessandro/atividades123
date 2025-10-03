
function onButtonPressedGerar() {
    const numeroPerfeito = document.getElementById('inNumeroPerfeito').value;
const resposta = document.getElementById('outResposta');
            resposta.innerText = "";

    if(isNumeroPerfeito(numeroPerfeito)) {
        resposta.innerText = "É perfeito!";
    } else {
        resposta.innerText = "Não é perfeito!";
    }
}
function isNumeroPerfeito(numero) {
    let calculo = 0;
    for (let index = 1; index < numero; index++) {
        if(((numero/index)%1) == 0 ){
            calculo += index;
            console.log(calculo);
        }
    }
    if(calculo == numero) return true;
    return false;
}

