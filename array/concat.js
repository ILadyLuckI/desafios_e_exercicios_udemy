//Método CONCAT
const filhas = ['Mel', 'Cinzinha', 'Eliza']
const filhos = ['Bruno', 'Felipe']
/*o método concat pega o array 'filhas' e passa como
* parametro 'filhos' e faz a concatenação*/
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))