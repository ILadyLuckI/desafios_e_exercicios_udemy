const pai = { nome: 'Alemao', corCabelo: 'louro' }

//criando um objeto novo usando o Object.create tendo como prototipo o objeto pai
const filha1 = Object.create(pai)
filha1.nome = 'Sandra'
console.log(filha1.corCabelo)

/*aqui iremos criar outro objeto, cujo prototipo é o objeto pai,
e ja vai receber automaticamente os atributos do pai, porém podemos
setar alguns outros atributos também a partir da criação de um objeto*/
const filha2 = Object.create(pai, {
    nome: { value: 'Izabella', writable: false,  enumerable: true}
})

console.log(filha2.nome)
//tentando mudar o valor de filha2 para 'Daiana'
filha2.nome = 'Daiana'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

//chamando no console, usando 'keys' que trará 'nome'
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//verificando se uma propriedade pertence ou não a um objeto
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança ${key}`)
}
