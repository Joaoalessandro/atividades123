const label = document.getElementById("outResposta");
function onButtonGerarPressed(){
    let respostaTexto = '';
    let contador = 0.00;
    do{
        respostaTexto += `Valor de A: ${contador}<br>Resposta:`+calcularSenoAngulo(contador).toFixed(2)+'<br><br>';
        contador += 0.5;
    }while(contador <=3);
    label.innerHTML = respostaTexto;
}

function calcularSenoAngulo(valor){
    let valorCalculado = 0;
    valorCalculado = valor - (Math.pow(valor, 3)/6) + (Math.pow(valor, 5)/120) - (Math.pow(valor, 7) / 5040);
    return valorCalculado;
}