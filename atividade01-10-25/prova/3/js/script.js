function verificarInformacoes() {
    const numeroIdent = document.getElementById('inNumeroIdent').value;
    const quantidadeAulas = document.getElementById('inQuantidadeAulas').value;
    const nota1 = document.getElementById('inNota1').value;
    const nota2 = document.getElementById('inNota2').value;
    const nota3 = document.getElementById('inNota3').value;
    const mediaExercicios = document.getElementById('inMediaExercicios').value;
    const labelResposta = document.getElementById('outCategoria');

    let frequencia = quantidadeAulas;
    let mediaFinal = parseFloat((parseFloat(nota1) + (parseFloat(nota2) * 2) + (parseFloat(nota3) * 3) + parseFloat(mediaExercicios)) / 7).toFixed(2);
    let conceito = 's';

    let respostaAluno = `Matrícula: ${numeroIdent}<br>Frequência:${frequencia}
                                                  <br>Nota 1:${nota1}
                                                  <br>Nota 2:${nota2}
                                                  <br>Nota 3:${nota3}
                                                  <br>Média Exercicios:${mediaExercicios}
                                                  `;

    if (mediaFinal < 4.0) {
        conceito = `E`;
    }
    if (mediaFinal > 4.1 && mediaFinal < 6.1) {
        conceito = `D`;
    }
    if (mediaFinal >= 6.1 && mediaFinal < 7.6) {
        conceito = `C`;
    }
    if (mediaFinal > 7.5 && mediaFinal<= 9) {
        conceito = `B`;
    }
    if (mediaFinal >= 9.1 && mediaFinal<= 10) {
                        conceito = `A`;
                    }

            

if(frequencia >= 75 && (conceito == 'A' || conceito == 'B' || conceito == 'C')) {
        respostaAluno += `Situação: Aprovado`;
    } else {
                respostaAluno += `Situação: Reprovado`;

    } labelResposta.innerHTML = respostaAluno;

}
