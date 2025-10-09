const precoFilme = document.getElementById("idInFilme");
const diaSemana = document.getElementById("idInDiaSemana");
const tipoFilme = document.getElementById("idInTipoFilme");
const resultado = document.getElementById("idOnResultado");

function calcularPreco(preco, dia, tipo) {
    let precoFinal = 0.00;

    if (dia == 2 || dia == 3 || dia == 5) {
        precoFinal = preco - (preco * 0.40);
    } else {
        precoFinal = preco;
    }

    if (tipo == 'Lançamento') {
        precoFinal += (preco * 0.15);

    }
    return precoFinal;
}

function eventoBtnExecutar() {
    resultado.innerText = `Preço final: R$ ${(this.calcularPreco(Number(precoFilme.value), Number(diaSemana.value), tipoFilme.value)).toFixed(2)}`;
}