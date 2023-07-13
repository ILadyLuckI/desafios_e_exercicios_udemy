//OBJECT.PREVENTEXTENSIONS - previne que o método seja extendido
//não permite que o numero de atributos aumente
//criando um objeto literal 'produto'
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
//Object.isExtensible - testa se um objeto foi criado com o 'preventExtensions'
console.log('Extensível:', Object.isExtensible(produto))

//testando -  tentando modificar os atributos
//o atributo não está congelado, portanto o preventExtensions permite modificações
//o que não é permitido é adicionar novos atributos, e pode excluir atributos
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//OBJECT.SEAL - selar
//ao selar um objeto, não é possivel adicionar novos atributos
//nem excluir atributos do objeto
//consegue modificar valores dos atributos
const pessoa = { nome: 'Daiana', idade: 37 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Koblitz'//não esta presente no objeto, então não sera adicionado
delete pessoa.nome //o 'seal' não permite deletar atributos
pessoa.idade = 29
console.log(pessoa)

//OBJECT.FREEZE = selado + valores constantes
