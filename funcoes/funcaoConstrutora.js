function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0;

    //Método público
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual;
    }
}

const uno = new Carro;//função construtora Carro, para o objeto 'uno'
uno.acelerar();
console.log(uno.getVelocidadeAtual());//valor 5

const ferrari = new Carro(350, 20);//função construtora Carro, para o objeto 'ferrari'
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());//valor 60