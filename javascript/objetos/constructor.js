function Carro(marcaAtribuida,precoAtribuido){
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('honda', 4000);
const fiat = new Carro('fiat',6000)


function Carro2(marcaAtribuida,precoInicial){
    this.taxa = 1.2;
    const precoFinal = precoInicial * this.taxa;
    this.marca = marcaAtribuida;
    this.preco = precoFinal;
}

const uno = new Carro2("uno",2000)