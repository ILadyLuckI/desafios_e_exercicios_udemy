// pessoa aponta para um endereço de memoria 123 ->
// e o endereço aponta para o objeto, que existe no endereço de memória{...}
const pessoa = { nome: 'Daiana' }
pessoa.nome = 'Izabella'
console.log(pessoa)


//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)