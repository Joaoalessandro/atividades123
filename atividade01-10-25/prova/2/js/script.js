function verificarCategoria() {
    const anoNascimento = document.getElementById('inAno').value;
    const nomePessoa = document.getElementById('inNome').value;
    const labelResposta = document.getElementById('outCategoria');
    const anoAtual = 2025;
    if ((parseInt(anoAtual) - parseInt(anoNascimento)) < 5) {

        labelResposta.innerHTML = "Não tem Idade suficiente para classificação!"

    } else {
        if ((parseInt(anoAtual) - parseInt(anoNascimento)) <= 7 && (parseInt(anoAtual) - parseInt(anoNascimento)) >= 5) {
            labelResposta.innerHTML = `Nome:${nomePessoa}|Ano:${anoNascimento}|Idade: ${
                (parseInt(anoAtual) - parseInt(anoNascimento))
            }|Categoria: Infantil A`;
        } else {
            if ((parseInt(anoAtual) - parseInt(anoNascimento)) <= 10) {
                labelResposta.innerHTML = `Nome:${nomePessoa}|Ano:${anoNascimento}|Idade: ${
                    (parseInt(anoAtual) - parseInt(anoNascimento))
                }|Categoria: Infantil B`;
            } else {
                if ((parseInt(anoAtual) - parseInt(anoNascimento)) <= 13) {
                    labelResposta.innerHTML = `Nome:${nomePessoa}|Ano:${anoNascimento}|Idade: ${
                        (parseInt(anoAtual) - parseInt(anoNascimento))
                    }|Categoria: Juvenil A`;
                } else {
                    if ((parseInt(anoAtual) - parseInt(anoNascimento)) < 18) {
                        labelResposta.innerHTML = `Nome:${nomePessoa}|Ano:${anoNascimento}|Idade: ${
                            (parseInt(anoAtual) - parseInt(anoNascimento))
                        }|Categoria: Juvenil B`;
                    } else {
                        if ((parseInt(anoAtual) - parseInt(anoNascimento)) >= 18) {
                            labelResposta.innerHTML = `Nome:${nomePessoa}|Ano:${anoNascimento}|Idade: ${
                                (parseInt(anoAtual) - parseInt(anoNascimento))
                            }|Categoria: Sênior`;
                        }
                    }
                }
            }
        }
    }
}
