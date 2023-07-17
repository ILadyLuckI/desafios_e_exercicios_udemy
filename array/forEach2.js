Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

//percorrendo um array com FOREACH
const gatas = ['Mel', 'Julieta', 'Cinzinha']

//percorrendo a lista de aprovados com o forEach
gatas.forEach2(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})



