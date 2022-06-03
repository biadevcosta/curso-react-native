class Carro {
    constructor(c, v){
        this.cor = c
        this.valor =v
        console.log(`Cor do carro:${this.cor}, valor: R$ ${this.valor}`)
    }
}

let carro1 = new Carro("verde",100000)
let carro2 = new Carro("rosa", 539897)
let carro3 = new Carro("turquesa", 63625)