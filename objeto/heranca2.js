//Cadeia de protótipos (prototype chain)
/*o objetivo é demonstrar como o prototipo procura
os atributos na cadeia, para isso vão ser criados 3 objetos,
onde o objeto filho vai buscar o prototipo no objeto pai, e 
caso não encontre, vai procurar no avo*/

Object.prototype.atributo0 = '0'//NÃO FAÇA ISSO EM CASA!

const avo = { atributo1: 'A' }//o avo tem como protipo o Object.prototype
const pai = { __proto__: avo, atributo2:'B', atributo3: '3'}/*para referenciar o pai 
tem que buscar o prototipo no avo devemos usar a propriedade '__proto__', e aqui
será usado a notação literal de objetos*/
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)

//outro exemplo, teste
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarmais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

//estabelecendo a relação de prototipo com os objetos acima com o método 'setPrototypeOf'
Object.setPrototypeOf(ferrari, carro)//ferrari vai ter como objeto carro
Object.setPrototypeOf(volvo, carro)//volvo vai ter como objeto carro
//acessando a função com console.log
console.log(ferrari)
console.log(volvo)

volvo.acelerarmais(100)
console.log(volvo.status())

ferrari.acelerarmais(300)
console.log(ferrari.status())