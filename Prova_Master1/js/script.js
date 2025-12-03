class Populacao {
    #populacao = [];
    #tamPop;
    #tamGenes;

    constructor(tamPop, tamGenes) {
        this.#tamPop = tamPop;
        this.#tamGenes = tamGenes;
        this.gerarPopulacaoAleatoria();
    }

    getPopulacao() {
        return this.#populacao;
    }

    gerarPopulacaoAleatoria() {
        this.#populacao = [];
        for (let i = 0; i < this.#tamPop; i++) {
            let individuo = [];
            for (let j = 0; j < this.#tamGenes; j++) {
                let gene = Math.random() >= 0.5 ? 1 : 0;
                individuo[individuo.length] = gene;
            }
            this.#populacao[this.#populacao.length] = individuo;
        }
    }

    calcularFitness(individuo) {
        let soma = 0;
        for (let i = 0; i < individuo.length; i++) {
            soma += individuo[i];
        }
        return soma;
    }

    cruzamentoPontoUnico(ind1, ind2) {
        let pontoCorte = Math.floor(Math.random() * (ind1.length - 1)) + 1;

        let desc1 = [];
        let desc2 = [];

        for (let i = 0; i < ind1.length; i++) {
            if (i < pontoCorte) {
                desc1[desc1.length] = ind1[i];
                desc2[desc2.length] = ind2[i];
            } else {
                desc1[desc1.length] = ind2[i];
                desc2[desc2.length] = ind1[i];
            }
        }
        return [desc1, desc2];
    }

    mutar(individuo, taxaMutacao) {
        for (let i = 0; i < individuo.length; i++) {
            let sorteio = Math.floor(Math.random() * 100);
            if (sorteio < taxaMutacao) {
                if (individuo[i] === 1) {
                    individuo[i] = 0;
                } else {
                    individuo[i] = 1;
                }
            }
        }
    }

    encontrarIndividuoMelhorAdaptado() {
        let melhorInd = this.#populacao[0];
        let melhorFit = this.calcularFitness(this.#populacao[0]);

        for (let i = 1; i < this.#populacao.length; i++) {
            let fitAtual = this.calcularFitness(this.#populacao[i]);
            if (fitAtual > melhorFit) {
                melhorFit = fitAtual;
                melhorInd = this.#populacao[i];
            }
        }
        return { individuo: melhorInd, fitness: melhorFit };
    }

    mutarPiorIndividuo(taxa) {
        let piorIndIndex = 0;
        let piorFit = this.calcularFitness(this.#populacao[0]);

        for (let i = 1; i < this.#populacao.length; i++) {
            let fitAtual = this.calcularFitness(this.#populacao[i]);
            if (fitAtual < piorFit) {
                piorFit = fitAtual;
                piorIndIndex = i;
            }
        }
        this.mutar(this.#populacao[piorIndIndex], taxa);
    }

    cruzarTodos2a2() {
        let novaPop = [];
        let limite = this.#populacao.length;
        if (limite % 2 !== 0) limite--;

        for (let i = 0; i < limite; i += 2) {
            let pai1 = this.#populacao[i];
            let pai2 = this.#populacao[i + 1];

            let filhos = this.cruzamentoPontoUnico(pai1, pai2);

            novaPop[novaPop.length] = filhos[0];
            novaPop[novaPop.length] = filhos[1];
        }

        if (this.#populacao.length % 2 !== 0) {
            novaPop[novaPop.length] = this.#populacao[this.#populacao.length - 1];
        }

        this.#populacao = novaPop;
    }
}

function formatarVetor(vetor) {
    let s = "[";
    for (let i = 0; i < vetor.length; i++) {
        s += vetor[i] + (i < vetor.length - 1 ? ", " : "");
    }
    s += "]";
    return s;
}

function imprimirPopulacao(popObj) {
    let matriz = popObj.getPopulacao();
    let resultadoTexto = "";
    for (let i = 0; i < matriz.length; i++) {
        resultadoTexto += formatarVetor(matriz[i]) + " (Fit: " + popObj.calcularFitness(matriz[i]) + ")\n";
    }
    return resultadoTexto;
}

function executarSistema() {
    let tamPop = parseInt(document.getElementById("inTamPop").value);
    let tamGenes = parseInt(document.getElementById("inQtdGenes").value);
    let taxa = parseInt(document.getElementById("inTaxa").value);
    let geracoes = parseInt(document.getElementById("inGeracoes").value);

    let sistema = new Populacao(tamPop, tamGenes);
    let resultado = "";

    resultado += " POPULAÇÃO INICIAL n";
    resultado += imprimirPopulacao(sistema);

    for (let g = 1; g <= geracoes; g++) {
        sistema.cruzarTodos2a2();
        sistema.mutarPiorIndividuo(taxa);
    }

    resultado += "\n POPULAÇÃO FINAL (Após " + geracoes + " gerações) \n";
    resultado += imprimirPopulacao(sistema);

    let melhor = sistema.encontrarIndividuoMelhorAdaptado();
    resultado += "\n MELHOR INDIVÍDUO FINAL \n";
    resultado += "Genes: " + formatarVetor(melhor.individuo) + "\n";
    resultado += "Fitness: " + melhor.fitness + " (Max possível: " + tamGenes + ")";

    document.getElementById("outResposta").innerText = resultado;
}