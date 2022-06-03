let pessoa = {
    nome: 'Ana', 
    idade: 18, 
    sobrenome: "Goncalves",
    altura: 1.70, 
    peso: 70, 
    sexo: "feminino"
    }

//adicionando ao objeto
pessoa.hobbbie = "pintar"

//console.log(pessoa)

//metodos, colocar função como valor da propriedade

pessoa.andar = () => {
    return "pessoa andando"
}

//invocando o método
//console.log(pessoa.andar())

//metodo
pessoa.aniversario = () => {
    pessoa.idade++
}

pessoa.aniversario()

//console.log(pessoa)

//console.log(pessoa.idade)


pessoa.nomeCompleto = () => {
    return `${pessoa.nome} ${pessoa.sobrenome}`
}

console.log(pessoa.nomeCompleto())


//propriedade X metodo 
// propriedade é a propriedade de um objeto, exemplo:
// pessoa.nome => acessamos a propriedade nome
//método é quando temos uma função dentro da propriedade do objeto, ai chamamos de método
// pessoa.nomeCompleto()

