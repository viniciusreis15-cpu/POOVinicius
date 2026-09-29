console.log('Criando classes')
// criar classes (molde)

class Produto {
    id;
    nome;
    ativo;
    // metodo especial construtor
    constructor(id, nome, ativo) {
        this.id = id;
        this.nome = nome;
        this.ativo = true;
    }
}
// criar classes(molde)
class Carro {
    idCarro;
    nome;
    cor;
    disponivel;
    anoFabricacao;

    // metodo especial construtor
    constructor(idCarro, nome, cor, disponivel, anoFabricacao) {
        this.idCarro = idCarro;
        this.nome = nome;
        this.cor = cor;
        this.disponivel = disponivel;
        this.anoFabricacao = anoFabricacao;
    }
}

// instanciando = construir um objeto
const carro1 = new Carro(1, 'Fusca', 'Azul', true, 1975);
const carro2 = new Carro(2, 'Civic', 'Preto', false, 2020);
const carro3 = new Carro(3, 'Onix', 'Branco', true, 2023);

// Mostrando no console os objetos criados
console.log("--- Objetos Criados ---");
console.log(carro1);
console.log(carro2);
console.log(carro3);

// Modificando dois valores
carro1.cor = 'Vermelho';
carro2.disponivel = true;

// Mostrando os objetos atualizados
console.log("\n--- Objetos Atualizados ---");
console.log('Nome:', carro1.nome, '- Nova Cor:', carro1.cor);
console.log('Nome:', carro2.nome, '- Novo Status:', carro2.disponivel);
console.log(carro3);