
/* function declaration - posso chamar a função
antes de declarar ela, como no caso abaixo usando o 
'console.log antes da function. O*/
console.log(soma(3, 4))

function soma(x, y) {
    return x = y;
}

/*function expression - nesse caso eu só posso chamar essa função
depois de declarar ela*/
const sub = function (x, y) {
    return x - y;
}

console.log(sub(3, 4));

//named function expression
const mult = function mult(x, y) {
    return x * y;
}

console.log(mult(3, 4));