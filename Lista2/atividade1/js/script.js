function calcularDistancia() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        document.getElementById('resultado').innerHTML = 
            'Por favor, digite valores válidos para todas as coordenadas.';
        return;
    }
    
    const diferencaX = x2 - x1;
    const diferencaY = y2 - y1;
    const distancia = Math.sqrt((diferencaX * diferencaX) + (diferencaY * diferencaY));
    
    document.getElementById('resultado').innerHTML = 
        `A distância entre os pontos A e B é: ${distancia.toFixed(2)}`;
}