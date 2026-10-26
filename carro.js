console.log("Carro");

console.log("Classe carro");
// criar classes (molde)

class Carro{
    id;
    nome;
    cor;
    disponivel;
    anoFabricacao;
    // método especial constructor
    constructor(id,nome,cor,anoFabricacao){
        this.id = id;
        this.nome = nome;
        this.cor = cor;
        this.disponivel = true;
        this.anoFabricacao = anoFabricacao;
    }
}
// instanciando = construir um objeto
const p1 = new Carro (1,"BMW", "Preto", "2018");
const p2 = new Carro (2,"Lamborghini", "Laranja", "2023");
const p3 = new Carro (3,"Ferrari", "Vermelho", "2021");

console.log(p1);
p1.nome = "Carro";
console.log(p1);
console.log(p2);
p2.disponivel = true;
console.log(p2);
console.log("Nome Carro: " + p2.nome +"  status: " + p2.disponivel);
