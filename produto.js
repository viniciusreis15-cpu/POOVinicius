console.log("Criando Classes")
// criar classes (molde)

class Produto {
    id;
    nome;
    ativo;
    // método especial construtor
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
        this.ativo = true;
    }
}
// instanciando = construir um objeto
const p1 = new Produto(1, "Carregador");
const p2 = new Produto(2, "Capinha");


console.log(p1);
p1.nome = "Carregador Iphone";
console.log(p1);
console.log(p2);
p2.ativo = false;
console.log(p2);
console.log("Nome Produto: " + p2.nome + " - status: " + p2.ativo);