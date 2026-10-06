console.log("Atividade: Classe Aluno");


const Turno = Object.freeze({
    MANHA: "Manhã",
    TARDE: "Tarde",
    NOITE: "Noite"
});


class Aluno {
    id;
    nome;
    dataMatricula;
    turno;
    estaAtivo;

    constructor(id, nome, dataMatricula, turno) {
        this.id = id;
        this.nome = nome;
        this.dataMatricula = dataMatricula;
        this.turno = turno;
        this.estaAtivo = true; 
    }
}


const a1 = new Aluno(1, "Maria", "10/02/2026", Turno.MANHA);
const a2 = new Aluno(2, "João", "15/02/2026", Turno.TARDE);

console.log("Antes das mudanças:");
console.log(a1);
console.log(a2);


a1.turno = Turno.NOITE;
a2.estaAtivo = false;


console.log("Depois das mudanças:");
console.log(a1);
console.log(a2);