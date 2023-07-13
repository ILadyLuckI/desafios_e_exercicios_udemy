class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

//o método extends sinaliza que a class Pai terá como prototipo a class Avo
class Pai extends Avo { 
    constructor(sobrenome, profissao = 'Programadora') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Koblitz') 
    }
}

const filho = new Filho
console.log(filho)
