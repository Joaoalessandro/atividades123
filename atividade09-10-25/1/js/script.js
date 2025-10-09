
function onButtonPressed(){
let numero1 = Number(document.getElementById('inNumero1').value);
let numero2 = Number(document.getElementById('inNumero2').value);

let resposta = document.getElementById('outResposta');
let auxResposta = 0.00;

    for (let index = 0; index < numero2; index++) {
        auxResposta += numero1;
        console.log(numero1+' '+numero2);
    }
    resposta.innerHTML = "Produto: "+auxResposta;

}