// Classe

const Genero ={
    M:"M",
    F:"F",
    OUTRO: "Outro"
}


class Usuario {
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;
    // método Constructor
    constructor(id, nome, senha, dataNascimento, genero, isAdmin){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date (dataNascimento);
        this.genero = genero;
        this.isAdmin = false;

   }
   // métodos de classe --> função
   perfil(){
    return "Nome: " + this.nome + " - Data de Nascimento: " + this.dataNascimento.toString();
   }

}

const user1 = new Usuario(1,"Julio","1253","2010-03-12T01:23:12", Genero.M);
const user2 = new Usuario(2,"Penaldo","183","2015-08-28T00:12:05", Genero.M);
console.log(user1)
console.log("oi")

user1.nome = "Julio";
console.log(user1)
console.log(user1.perfil())
console.log(user2.perfil())
