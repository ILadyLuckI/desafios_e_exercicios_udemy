//HERANÇA - o objetivo é criar mecanismos para poder reutilizar o codigo
//Herança em javascript so tem uma classe pai

//objeto 1
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

//objeto 2
const volvo = {
    modelo: 'V40',
    velMax: 200
}

/*usando o atributo '__proto__' conseguimos acessar quem é o objeto pai,
se ele não achar o objeto pai, ele busca o prototipo, e assim por diante,
caso ele não ache, o valor retornado será 'undefined'*/
console.log(ferrari.__proto__)

//esses dois exemplos apontam para o mesmo Object.prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

//neste exemplo o Object.prototype não tem outro objeto pai nessa hierarquia
console.log(Object.prototype.__proto__ === null)

//testando
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
