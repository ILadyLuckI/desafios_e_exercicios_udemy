//Outra forma de percorer Array com FILTER - critério de filtro

//criando uma constante 'produto' que vai receber um 'Array'
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

//produtos.filter vai receber uma função callback que vai receber um parametro p
console.log(produtos.filter(function(p) {
//retornando true nada sera filtrado
    return false
}))
//criar duas funções arrow, para saber se o produto é caro e se é fragil
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil /*aqui basta colocar que o produto é fragil
pois ja foi setado como booleano, true or false.*/

console.log(produtos.filter(caro).filter(fragil))