/*é muito oneroso ficar escrevendo função por funçã várias vezes
const produto1 = {
    nome: '...';
    preco: 45;
}

const produto2 = {
    nome: '...';
    preco: 54;
}

const produto3 = {
    nome: '...';
    preco: 49;
}
*/

//Factory simples - é uma função que retorna um objeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());