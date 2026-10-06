//classe
//Enum
const Genero = Object.freeze({
  M: 'M',
  F: "F",
  OUTRO: 'Outro'
})
class Usurio {
  id;
  nome;
  senha;
  dataNascimento;
  genero;
  isAdmin;
  // método construtor
  constructor(id, nome, senha, dataNascimento, genero, isAdmin) {
    this.id = id;
    this.nome = nome;
    this.senha = senha;
    this.dataNascimento = new Date(dataNascimento);
    this.genero = genero;
    this.isAdmin = false;
  }
  // métodos de classe --> função
  perfil() {
    return "Nome: " + this.nome + "- Data de nascimento: " + this.dataNascimento.toString();
  }

}

const user1 = new Usurio(1, "Vinicius Da Silva Reis", "152", "2010-02-15 T54:23:16", Genero.M);
const user2 = new Usurio(1, "Murilo Dos Santos", "987", "1998-04-08 T23:12:36", Genero.M);
console.log(user1)
user1.none = "Vinicius Da Silva Reis"
console.log(user1)
console.log(user1.perfil())
console.log(user2.perfil())