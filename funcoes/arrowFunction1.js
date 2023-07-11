// Função arrow é uma função anônima
//se quiser chamar a função arrow mais tarde é necessário armazenar ela uma variável
//ao utilizar bloco como no exemplo abaixo, é necessario colocar o 'return', para não retornar undefined
let dobro = function (a) {
    return 2 * a
}
//sobrescrevendo a função
dobro = (a) => {
    return 1 * a
}

dobro = a => 2 * a // return esta implícito
console.log(dobro(Math.Pi))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'//sem parametro
ola = _ => 'Olá' //com parametro
console.log(ola())