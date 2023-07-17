//usando a função MAP para gerar o dobro dos numeros listados no array
//o MAP não transforma o ARRAY atual, ele cria um novo array com a modificação
//associado ao MAP existe um laço
const nums = [1, 2, 3, 4, 5]

// O MAP é um For com propósito - ele vai percorrer o laço e vai fazer uma transformação no array
//passando uma função callback para o map
//essa função pode receber três parâmetros
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

//proximo exemplo - FUNÇÃO 1
//função arrow que cria um elemento e soma + 10 unidades
const soma10 = e => e + 10
//FUNÇÃO 2
const triplo = e => e * 3
//FUNÇÃO 3
//vai retornar usando uma template string para tranformar para Moeda
//toFixed fixa as casas decimais, aqui em duas, e replace altera o ponto para virgula
const numParaDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

/*O ARRAY original era 1, 2, 3, 4, 5, então somei 10, multipliquei por 3(triplo),
e converti para dinheiro*/
resultado = nums.map(soma10).map(triplo).map(numParaDinheiro)
console.log(resultado)