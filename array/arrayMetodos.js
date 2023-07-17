//metodo POP - remove o ultimo elemento do array
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro!
console.log(pilotos)

//metodo PUSH - adiciona um elemento dentro do array na ultima posição
pilotos.push('Verstappen')
console.log(pilotos)

//metodo SHIFT - remove o PRIMEIRO elemento de um array
pilotos.shift()
console.log(pilotos)

//metodo UNSHIFT - adiciona um elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

//metodo SPLICE para adicionar elementos dentro de um array, no indice 2 e não vai remover ninguém (0)
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//metodo SPLICE para remover elementos dentro de um array, no indice 3 e remover um elemento (1)
pilotos.splice(3, 1) // Massa quebrou novamente!
console.log(pilotos)

//metodo SLICE 
const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)