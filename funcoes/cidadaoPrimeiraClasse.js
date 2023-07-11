// Funcção eJS é First-Class object (Citizens)
//Higher-order function

//criar de forma literal
function funcao1() { }

//Armazenar em uma variável
const funcao2 = function () { }

//Armazenar em um array
const array = [function (a, b) { return a + b }, funcao1, funcao2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opaa!'}
console.log(obj.falar())

//Passar função como parametro
function run(funcao) {
    funcao()
}

run(function () {console.log('Executando...')})

//Uma função pode retornar/contar uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
