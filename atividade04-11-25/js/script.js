class Conjunto {
    #dados = [];

    existe(num) {
        for (let n of this.#dados) {
            if (n === num) {
                return true;
            }
        }
        return false;
    }

    add(num) {
        if (!this.existe(num)) {
            this.#dados.push(num);
        }
    }

    itens() {
        const copia = [];
        for (let n of this.#dados) {
            copia.push(n);
        }
        return copia;
    }

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

    ordenar() {
        const ordenado = this.itens();
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

    toString() {
        let texto = "[";
        for (let i = 0; i < this.#dados.length; i++) {
            texto += this.#dados[i];
            if (i < this.#dados.length - 1) texto += "|";
        }
        texto += "]";
        if (texto === "[]") return "φ";
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

        document.getElementById("btnUniao").onclick = () =>
            this.mostrar(this.a.uniao(this.b), "União");

        document.getElementById("btnIntersecao").onclick = () => this.mostrar(this.a.inter(this.b), "Interseção");

        document.getElementById("btnDifAB").onclick = () => this.mostrar(this.a.dif(this.b), "A - B");

        document.getElementById("btnDifBA").onclick = () => this.mostrar(this.b.dif(this.a), "B - A");

        document.getElementById("btnIdentico").onclick = () => {
            this.res.textContent = this.a.igual(this.b)
                ? "A e B são iguais"
                : "A e B são diferentes";
        };

        document.getElementById("btnOrdenado").onclick = () =>
            this.mostrar(this.a.uniao(this.b).ordenar(), "União Ordenada");
    }

    adicionar(qual) {
        let campo = qual === "a"
            ? document.getElementById("inputA")
            : document.getElementById("inputB");

        const num = parseInt(campo.value);
        const img = document.getElementById('eduKof');

        if (!isNaN(num)) {
            if (qual === "a") this.a.add(num);
            else this.b.add(num);

            campo.value = "";
            this.atualizar();

            img.style.display = "none";
            let app = new App();
            app.tocarSom("meuAudioJingle");

        } else {
            img.style.display = "block";

            let app = new App();
            app.tocarSom("meuAudioJingle");
        }
    }

    atualizar() {
        this.sa.innerHTML = "A = " + this.a.toString();
        this.sb.innerHTML = "B = " + this.b.toString();
    }

    mostrar(conjunto, titulo) {
        this.res.textContent = `${titulo}: ${conjunto.toString()}`;
    }

    tocarSom(id) {
        //array de todos os audios da pagina para parar
        const audios = document.querySelectorAll("audio");

        audios.forEach(a => {
            a.pause();
            a.currentTime = 0;
        });

        const audio = document.getElementById(id);
        if (audio) {
            audio.play();
        }
    }
}

window.meuApp = new App();