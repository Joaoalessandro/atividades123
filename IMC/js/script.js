function calcularIMC(){
    const pesoUser = Number(document.getElementById("idInPeso").value);
    const alturaUser = Number(document.getElementById("idInAltura").value);
    return (pesoUser/(alturaUser * alturaUser)).toFixed(2);
}

function eventBtnCalcularIMC(){
    const nomeUser = document.getElementById("idInNome").value;
    const resposta = document.getElementById("idOnResultado");
    let imcResultado = calcularIMC();
    resposta.textContent = `Olá, ${nomeUser}, Seu IMC é: ${imcResultado}`;
    const meuModal = new bootstrap.Modal(document.getElementById('meuMoldal'));
    meuModal.show();
}