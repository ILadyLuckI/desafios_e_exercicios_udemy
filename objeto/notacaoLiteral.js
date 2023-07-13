//OBJETO 1
const a = 1
const b = 2
const c = 3
        //ao criar uma variável a ela recebe o valor da constante a, ou seja obj = {a: a}
const obj1 = { a: a, b: b, c: c }//esse modelo de duplicidade não é mais necessário
//porem essa notação permite que o nome do atributo seja modificado

//OBJETO 2
const obj2 = { a, b, c }//forma reduzida, ele automaticamente vai receber o nome da constante
console.log(obj1, obj2)


//OBJETO 3 -criar dinamicamente um atributo em um objeto usando uma string
const nomeAttr = 'nota'
const valorAttr = 7.87


const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)


//OBJETO 4
//nova versão, mas a ideia é a mesma do exemplo anterior, porém reduzida
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


//OBJETO 5 - como definir funções dentro de um objeto literal
const obj5 = {
    //forma antiga
    funcao1: function() {
        //...
    },
    funcao2() {//forma nova - forma mais curta de definir uma função em javascript
        //...
    }
}
console.log(obj5)
