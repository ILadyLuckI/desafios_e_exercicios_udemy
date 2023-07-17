console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Emy', 'Ariel', 'Lenis')
console.log(aprovados)

aprovados = ['Emy', 'Ariel', 'Lenis']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Izabella'
aprovados.push('Sandra')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//splice - adiciona e/ou remove elementos em um determinado indice
aprovados = ['Emy', 'Ariel', 'Lenis']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)