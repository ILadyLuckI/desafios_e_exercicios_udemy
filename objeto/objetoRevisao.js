//Orientação a Objetos
//coleção dinâmica de chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preço = 220;

console.log(produto);
delete produto.preço;
delete produto['marca do produto'];
console.log(produto);

//criando um objeto mais complexo chamado 'carro'
//este objeto vai conter outros valores, como por exemplo, um array
const carro = {
    //o objeto pode conter dados básicos
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Daiana',
        idade: 37,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Lenis',
        idade: 30
    }, {
        nome: 'Emy',
        idade: 23
    }]
    //e pode conter uma função também
    /*calcularValorSeguro: function(){
        //...
    }
    */
}
//para acessar os atributos pode-se usar a notação ponto'.'
carro.proprietario.endereco.numero = 1000
//pode-se usar a notação colchetes '[]', mesmo que não tenha definido
carro['proprietario']['endereco']['logradouro'] = 1000
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
console.log(carro);
console.log(carro.condutores);




