//criando um objeto e tranformando em JSON com STRINGIFY
//JSON é um formato de dados para interoperabilidade entre sistemas
//no exemplo abaixo a função não será mostrada no console
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj))

/*console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) esse objeto não será
reconhecido*/
/*console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3 }")) esse formato
também não é valido, pois o nome do atributo deve ser delimitado
por aspas duplas ("").*/
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))//este formato é valido

//numero não precisa colocar entre aspas duplas
//string precisa de aspas duplas
//booleanos, arrays e objetos não precisam de aspas duplas
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
