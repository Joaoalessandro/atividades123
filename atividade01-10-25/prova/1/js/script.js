function verificaPesoEmJupiter() {
    const pesoNaTerra = document.getElementById('inPesoTerra').value;
    const nomePessoa = document.getElementById('inNome').value;
    const labelResposta = document.getElementById('outPesoJupiter');
    labelResposta.innerHTML = `Olá ${nomePessoa}, seu peso em jupiter é ${((parseFloat(pesoNaTerra)*2.64) /9.87).toFixed(3)} KG`;

}