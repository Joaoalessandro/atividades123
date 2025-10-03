
function onButtonPressedGerar() {
const resposta = document.getElementById('outResposta');
    resposta.innerHTML = verCaracteristicas();
}
function verCaracteristicas() {
    let resposta = '';
    for (let index = 1000; index < 9999; index++) {
        let parte1 = index.toString().substring(0,2);
        let parte2 = index.toString().substring(2,4);
        if((Math.pow((parseInt(parte1)+parseInt(parte2)), 2)==index)){
            resposta += index+'<br>';
        }
    }

   return resposta;
}

