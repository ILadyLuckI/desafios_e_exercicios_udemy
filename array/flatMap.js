/*Usando FLATMAP - 
* a ideia é ter uma matriz e achatar ela para
* formar um unico array*/

//criando uma constante que contém um array de turmas
const escola = [{
    nome: 'Turma N1',
    //criando um array de objetos
    alunos: [{
        nome: 'Elenice',
        nota: 9.8
    }, {
        nome: 'Nath',
        nota: 7.3
    }]
}, {
    nome: 'Turma M1',
    alunos: [{
        nome: 'Emy',
        nota: 9.5
    }, {
        nome: 'Ariel',
        nota: 9.3
    }]
}]


const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([9.8, 7.3], [ 9.5, 9.3]))

//este metodo não existe na API padrão
Array.prototype.flatMap = function(callback) {
                                //1º parametro é um array vazio, e o segundo é a callback
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)