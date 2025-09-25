function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerHTML = 
            'Por favor, digite valores válidos para todas as notas.';
        return;
    }
    
    const somaPonderada = (nota1 * 2) + (nota2 * 3) + (nota3 * 5);
    const somaPesos = 2 + 3 + 5;
    const media = somaPonderada / somaPesos;
    
    document.getElementById('resultado').innerHTML = 
        `A média final do aluno é: ${media.toFixed(2)}`;
}