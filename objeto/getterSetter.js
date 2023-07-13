//getters e setters são metodos
//get para ler uma variável
//set para alterar o valor de uma variável

const sequencia = {
    //colocar underline antes da variável não significa que vai barrar e sera possivel continuar acessando ela
    _valor: 1, //convenção - essa variável sera acessada somente internamente
    //get - usado para pegar um valor
    get valor() { return this._valor++ },
    //set - usado para settar um valor
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)