
const pessoa = {
    saudacao:'Bom dia', //'saudacao é atributo
    falar() {
        console.log(this.saudacao)/*this esta acessando o objeto 'pessoa', 
         que é o dono da função, através do atributo 'saudacao'*/
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e orientada a objetos

const falarDePessoa = pessoa.falar.bind(pessoa)//passa um objeto no qual deve ser resolvido o this
falarDePessoa()

 /*o 'bind' é um método para amarrar um objeto para ele ser o dono da execução de um objeto*/
