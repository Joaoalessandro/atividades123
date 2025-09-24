function calcularDelta() {
    const a = parseFloat(document.getElementById('coefA').value);
    const b = parseFloat(document.getElementById('coefB').value);
    const c = parseFloat(document.getElementById('coefC').value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultado').innerHTML = 
            'Por favor, digite valores válidos para todos os coeficientes.';
        return;
    }
    
    const delta = (b * b) - (4 * a * c);
    
    document.getElementById('resultado').innerHTML = 
        `O valor do discriminante (delta) é: ${delta}`;
}