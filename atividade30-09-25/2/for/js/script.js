const label = document.getElementById("outResposta");
function onButtonGerarPressed(){
    let respostaTexto = '';
    for(contador = 0.00; contador <= 3; contador += 0.5){
        respostaTexto += `Valor de A: ${contador}<br>Resposta:`+calcularSenoAngulo(contador).toFixed(2)+'<br><br>';
    }
    label.innerHTML = respostaTexto;
}

function calcularSenoAngulo(valor){
    let valorCalculado = 0;
    valorCalculado = valor - (Math.pow(valor, 3)/6) + (Math.pow(valor, 5)/120) - (Math.pow(valor, 7) / 5040);
    return valorCalculado;
}