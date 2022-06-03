let objeto = {}

let pessoa = {
    nome: "Ana",
    sobrenome: "Goncalves",
    sexo: "femenino",
    idade: 0,
    altura: 1.70,
    peso: 70,
    andando : false,
    caminhouQuantosMetros: 0,
}

pessoa.fazerAniversario = () => {
    return pessoa.idade++;
}


pessoa.andar = (metros) => {
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
}

pessoa.andar(100)
pessoa.andar(100)
console.log(pessoa)

pessoa.parar = () => {
    pessoa.andando = false;
}

pessoa.nomeCompleto = () => {
    return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}`
}

console.log(pessoa.nomeCompleto())

pessoa.mostrarIdade = () => {
    return `Olá, eu tenho ${pessoa.idade} anos`
}

console.log(pessoa.mostrarIdade())

pessoa.mostrarPeso = () => {
    return `Eu peso ${pessoa.peso}Kg.`
}

console.log(pessoa.mostrarPeso())
//console.log(pessoa.fazerAniversario()) */

pessoa.mostraAltura = () => {
    return `Minha altura é ${pessoa.altura}m`
}

console.log(pessoa.mostraAltura())

/*pessoa.fazerAniversario()
pessoa.fazerAniversario()*/
pessoa.fazerAniversario()

pessoa.andar(20)
pessoa.andar(40)
pessoa.andar(10)

pessoa.parar()


pessoa.apresentacao = () => {
    let sexo = "o";
    let idade = "anos";
    let metro = "metros";

    if (pessoa.sexo === "femenino") {
        sexo = "a"
    }
    if (pessoa.idade === 1) {
        idade = "ano"
    }
    if (pessoa.metro === 1) {
        metro = "metro"
    }

    return `Olá eu sou ${sexo} ${pessoa.nome}, tenho ${pessoa.idade} ${idade}, minha altura é ${pessoa.altura}, meu peso é ${pessoa.peso} e só hoje eu caminhei ${pessoa.caminhouQuantosMetros} ${metro}`
}
 console.log(pessoa.apresentacao())



