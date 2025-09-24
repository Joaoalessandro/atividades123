function calcularCusto() {
    const tempo = parseFloat(document.getElementById('tempo').value);
    const velocidade = parseFloat(document.getElementById('velocidade').value);
    
    if (isNaN(tempo) || isNaN(velocidade) || tempo <= 0 || velocidade <= 0) {
        document.getElementById('resultado').innerHTML = 
            'Por favor, digite valores válidos para tempo e velocidade.';
        return;
    }
    
    const distancia = tempo * velocidade;
    const litros = distancia / 12.5;
    const custo = litros * 6.44;
    
    document.getElementById('resultado').innerHTML = 
        `Distância: ${distancia.toFixed(2)} Km<br>
         Litros de gasolina: ${litros.toFixed(2)} L<br>
         Custo total: R$ ${custo.toFixed(2)}`;
}