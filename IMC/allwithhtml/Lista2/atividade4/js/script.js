function calcularPrestacao() {
    const valorPrestacao = parseFloat(document.getElementById('valorPrestacao').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
    const diasAtraso = parseInt(document.getElementById('diasAtraso').value);
    
    if (isNaN(valorPrestacao) || isNaN(taxaJuros) || isNaN(diasAtraso) || valorPrestacao <= 0 || taxaJuros < 0 || diasAtraso < 0) {
        document.getElementById('resultado').innerHTML = 
            'Por favor, digite valores válidos para todos os campos.';
        return;
    }
    
    const valorAtualizado = valorPrestacao + (valorPrestacao * (taxaJuros / 100) * diasAtraso);
    const juros = valorAtualizado - valorPrestacao;
    
    document.getElementById('resultado').innerHTML = 
        `Valor Original: R$ ${valorPrestacao.toFixed(2)}<br>
         Juros por Atraso: R$ ${juros.toFixed(2)}<br>
         Valor Atualizado: R$ ${valorAtualizado.toFixed(2)}`;
}