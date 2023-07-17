//constante quaseArray recebe um objeto
const quaseArray = { 0: 'Izabella', 1: 'Ariel', 2: 'Daiana'}
console.log(quaseArray)

//simular a impressão no console como se fosse um array
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Izabella', 'Ariel', 'Daiana']
console.log(quaseArray.toString(), meuArray)