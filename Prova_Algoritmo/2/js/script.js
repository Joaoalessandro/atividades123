function calcularquociente() {
    let inNumero1 = Number(document.getElementById("inNumero1").value);
    let inNumero2 = Number(document.getElementById("inNumero2").value);
    
    if (inNumero2 === 0) {
        alert("Não é possível dividir por zero!");
        return;
    }
    let quociente = 0;
    let dividendo = inNumero1;
    let divisor = inNumero2;
    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        quociente++;
    }
     return "Quociente: " + quociente; 
}

function calcularResto() {
    let inNumero1 = Number(document.getElementById("inNumero1").value);
    let inNumero2 = Number(document.getElementById("inNumero2").value);
    if (inNumero2 === 0) {
        alert("Não é possível dividir por zero!");
        return;  
    }
    let resto = 0;
    let dividendo = inNumero1;
    let divisor = inNumero2;

    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
    }
    resto = dividendo;
    return 'Resto:' + resto+'\n'; 
}

function onButtonClick() {
    let resposta = '\n';
    let outResposta = document.getElementById("outResposta");
    resposta += calcularResto();
    resposta += calcularquociente();
    outResposta.innerText = resposta;
}