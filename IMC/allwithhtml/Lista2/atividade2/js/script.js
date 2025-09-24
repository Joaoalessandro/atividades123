function calcularSalario() {
    const salarioFixo = parseFloat(document.getElementById('salarioFixo').value);
    const tvLCD = parseInt(document.getElementById('tvLCD').value);
    const tvLED = parseInt(document.getElementById('tvLED').value);
    const tvPlasma = parseInt(document.getElementById('tvPlasma').value);
    
    if (isNaN(salarioFixo) || isNaN(tvLCD) || isNaN(tvLED) || isNaN(tvPlasma)) {
        document.getElementById('resultado').innerHTML = 
            'Por favor, digite valores válidos para todos os campos.';
        return;
    }
    
    const comissaoLCD = tvLCD * 50;
    const comissaoLED = tvLED * 60;
    const comissaoPlasma = tvPlasma * 55;
    
    const comissaoTotal = comissaoLCD + comissaoLED + comissaoPlasma;
    const salarioTotal = salarioFixo + comissaoTotal;
    
    document.getElementById('resultado').innerHTML = 
        `Comissão LCD: R$ ${comissaoLCD.toFixed(2)}<br>
         Comissão LED: R$ ${comissaoLED.toFixed(2)}<br>
         Comissão Plasma: R$ ${comissaoPlasma.toFixed(2)}<br>
         Comissão Total: R$ ${comissaoTotal.toFixed(2)}<br>
         Salário Total: R$ ${salarioTotal.toFixed(2)}`;
}