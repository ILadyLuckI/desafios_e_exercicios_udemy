//aprendendo um pouco sobre o contexto onde é criada uma função
const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec()