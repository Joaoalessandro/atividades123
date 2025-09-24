function calcularVolume() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
   
    if (isNaN(base) || isNaN(altura)) {
        document.getElementById('resultado').innerHTML = 
            'Por favor, digite valores válidos para todas as notas.';
        return;
    }
    
   const volume = (1/5)*(base*altura);
    
    document.getElementById('resultado').innerHTML = 
        `O volume da pirâmide é: ${volume.toFixed(2)}`;
}