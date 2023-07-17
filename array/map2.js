//DESAFIO - Retornar um array apenas com os preços

//Criando um array
const carrinho = [
    //strings no formato JSON
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Primeiro chamar o JSON.parse para tranformar as strings para objeto
//Criando uma constante que vai receber json e vai retornar JSON.parse
const textoParaObjeto = json => JSON.parse(json)
//a const recebe 'produto' e retorna 'produto.preco'
const apenasPreco = produto => produto.preco

//const resultado recebe o array carrinho
//Map vai retornar 4 elementos, que são na verdade 4 objetos JSON
//em seguida é chamado mais um map para extrair apenas o preço
const resultado = carrinho.map(textoParaObjeto).map(apenasPreco)
//o resultado é impresso chamando console.log
console.log(resultado)
