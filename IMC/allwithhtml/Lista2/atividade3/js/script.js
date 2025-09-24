function calcularRendimento() {
    const P = parseFloat(document.getElementById('aplicacaoMensal').value);
    const i = parseFloat(document.getElementById('taxa').value) / 100;
    const n = parseInt(document.getElementById('meses').value);
    
    if (isNaN(P) || isNaN(i) || isNaN(n) || P <= 0 || i <= 0 || n <= 0) {
        document.getElementById('resultado').innerHTML = 
            'Por favor, digite valores válidos para todos os campos.';
        return;
    }
    
    const valorFuturo = P * ((((1 + i) ** n) - 1) / i);
    
    document.getElementById('resultado').innerHTML = 
        `Valor Aplicado Total: R$ ${(P * n).toFixed(2)}<br>
         Rendimento Total: R$ ${(valorFuturo - (P * n)).toFixed(2)}<br>
         Valor Futuro: R$ ${valorFuturo.toFixed(2)}`;
}   