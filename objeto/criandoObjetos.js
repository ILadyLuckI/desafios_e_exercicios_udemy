//DIFERENTES FORMAS DE CRIAR UMA FUNÇÃO CONSTRUTORA
//usando a notação literal
const obj1 = {}
//não confundir com Json

//object em JS - a partir de função construtora
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

//Funçoes construtoras - criando sua propria função construtora
//escopo global 'window' / espopo de bloco, a partir de variáveis como let e const
function Produto(nome, preco, desc) {
    //esta variável não esta encapsulada, ou seja ela esta visivel
    //this é um atributo publico
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto);

//Função Factory - é uma função que fabrica um objeto
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Daiana', 7900, 0);
const f2 = criarFuncionario('Elenice', 6500, 1);
console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

//uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON}');
console.log(fromJSON.info);