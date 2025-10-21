function calcularDivisao() {
    let inNumero1 = Number(document.getElementById("inNumero1").value);
    let inNumero2 = Number(document.getElementById("inNumero2").value);
    
    if (inNumero2 === 0) {
        alert("Não é possível dividir por zero!");
        return;
    }
    
    let outResposta = document.getElementById("outResposta");
    let quociente = 0;
    let resto = 0;
    
    let dividendo = inNumero1;
    let divisor = inNumero2;

    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        quociente++;
    }
    resto = dividendo;

    outResposta.innerText = "Quociente: " + quociente + " Resto: " + resto; 
}