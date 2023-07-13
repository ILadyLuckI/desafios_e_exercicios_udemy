const pessoa = {
    //chave: 'valor',
    nome:'Daiana',
    idade: 37,
    peso: 73
}

console.log(Object.keys(pessoa))//KEYS - vai buscar a chave de um objeto
console.log(Object.values(pessoa))//VALUES - vai buscar todos os valores de um objeto
console.log(Object.entries(pessoa))//ENTRIES - vai trazer um array contendo a chave e o valor

//um exemplo de como percorrer um array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


//definir uma propriedade de um objeto
//para definir uma propriedade, primeiro definir o 'target', que é nesse caso é 'pessoa'
//em seguida define o nome da propriedade, nesse caso 'dataNascimento'
Object.defineProperty(pessoa, 'dataNascimento', {
    //essa propriedade vai ser listada?
    enumerable: true,
    //essa propriedade vai aceitar ser modificada?
    writable: false,
    //atribuir o valor que quero dar a variável
    value: '01/01/2019'
})

pessoa.dataNascmineto = '01/01/2017'
console.log(pessoa.dataNascmineto)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const objResultante = Object.assign(destino, o1, o2)

Object.freeze(objResultante)
objResultante.c = 1234
console.log(objResultante)