    function onButtonPressed() {
      let numero1 = Number(document.getElementById('inNumero1').value);
      const resposta = document.getElementById('outResposta');
      


      let respostaText = "(";
      let numeroAtual = 1;
      let numeroAnterior = 0;
      let proximo = 0;


      for (let contador = 1; contador <= numero1; contador++) {
       
        proximo = numeroAtual + numeroAnterior;
        numeroAnterior = numeroAtual;
        numeroAtual = proximo;
         respostaText += numeroAnterior + " ";
      }

      resposta.innerHTML = "Sequência: " + respostaText.trim() + ")";
    }