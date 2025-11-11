class Conjunto {
    #dados = [];

    // verifica se o número já existe no conjunto
    existe(num) {
        for (let n of this.#dados) {
            if (n === num) {
                return true;
            }
        }
        return false;
    }

    // adiciona se não existir
    add(num) {
        if (!this.existe(num)) {
            this.#dados.push(num);
        }
    }

    // retorna uma cópia dos dados
    itens() {
        const copia = [];
        for (let n of this.#dados) {
            copia.push(n);
        }
        return copia;
    }

    // união de conjuntos
    uniao(outro) {
        const novo = new Conjunto();
        for (let n of this.#dados) {
            novo.add(n);
        }
        const outros = outro.itens();
        for (let n of outros) {
            novo.add(n);
        }
        return novo;
    }

    // interseção
    inter(outro) {
        const novo = new Conjunto();
        const outros = outro.itens();
        for (let n of this.#dados) {
            for (let m of outros) {
                if (n === m) {
                    novo.add(n);
                }
            }
        }
        return novo;
    }

    // diferença
    dif(outro) {
        const novo = new Conjunto();
        const outros = outro.itens();
        for (let n of this.#dados) {
            let encontrado = false;
            for (let m of outros) {
                if (n === m) {
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                novo.add(n);
            }
        }
        return novo;
    }

    // igualdade
    igual(outro) {
        const outros = outro.itens();
        if (this.#dados.length !== outros.length) return false;
        for (let n of this.#dados) {
            let achou = false;
            for (let m of outros) {
                if (n === m) {
                    achou = true;
                    break;
                }
            }
            if (!achou) return false;
        }
        return true;
    }

    // ordenar
    ordenar() {
        const ordenado = this.itens();
        // bubble sort simples
        for (let i = 0; i < ordenado.length - 1; i++) {
            for (let j = 0; j < ordenado.length - i - 1; j++) {
                if (ordenado[j] > ordenado[j + 1]) {
                    const temp = ordenado[j];
                    ordenado[j] = ordenado[j + 1];
                    ordenado[j + 1] = temp;
                }
            }
        }
        const novo = new Conjunto();
        for (let n of ordenado) {
            novo.add(n);
        }
        return novo;
    }

    // exibe o conjunto formatado
    toString() {
        let texto = "[";
        for (let i = 0; i < this.#dados.length; i++) {
            texto += this.#dados[i];
            if (i < this.#dados.length - 1) texto += "|";
        }
        texto += "]";
        if (texto == '[]') return 'φ';
        return texto;
    }
}

class App {
    constructor() {
        this.a = new Conjunto();
        this.b = new Conjunto();
        this.res = document.getElementById("resultado");
        this.sa = document.getElementById("saidaA");
        this.sb = document.getElementById("saidaB");
        this.ligarBotoes();
    }

    ligarBotoes() {
        document.getElementById("btnAddA").onclick = () => this.adicionar("a");
        document.getElementById("btnAddB").onclick = () => this.adicionar("b");
        document.getElementById("btnUniao").onclick = () => this.mostrar(this.a.uniao(this.b), "União");
        document.getElementById("btnIntersecao").onclick = () => this.mostrar(this.a.inter(this.b), "Interseção");
        document.getElementById("btnDifAB").onclick = () => this.mostrar(this.a.dif(this.b), "A - B");
        document.getElementById("btnDifBA").onclick = () => this.mostrar(this.b.dif(this.a), "B - A");
        document.getElementById("btnIdentico").onclick = () => {
            this.res.textContent = this.a.igual(this.b)
                ? "A e B são iguais"
                : "A e B são diferentes";
        };
        document.getElementById("btnOrdenado").onclick = () => this.mostrar(this.a.uniao(this.b).ordenar(), "União Ordenada");
    }

    adicionar(qual) {
        let campo;
        if (qual === "a") {
            campo = document.getElementById("inputA");
        } else {
            campo = document.getElementById("inputB");
        }

        const num = parseInt(campo.value);
        if (!isNaN(num)) {
            if (qual === "a") this.a.add(num);
            else this.b.add(num);
            campo.value = "";
            this.atualizar();
            document.getElementById('eduKof').style.display = 'none';
            const meuAudio = document.getElementById("meuAudio");
  meuAudio.stop();

        } else {
            document.getElementById('eduKof').style.display = 'block';
            const meuAudio = document.getElementById("meuAudio");
  meuAudio.play();
        }
    }

    atualizar() {
        this.sa.innerHTML = "A = " + this.a.toString();
        this.sb.innerHTML = "B = " + this.b.toString();
    }

    mostrar(conjunto, titulo) {
        this.res.textContent = `${titulo}: ${conjunto.toString()}`;
    }
}

new App();
