/*Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/


let isTruthy = function(parametro){
    return !!parametro
}

console.log(isTruthy(2 === 2))

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

console.log(isTruthy(1 === 'b'))
console.log(isTruthy(undefined))
console.log(isTruthy(null))
console.log(isTruthy(NaN))
console.log(isTruthy(''))
console.log(isTruthy(0))
console.log(isTruthy(-0))


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1))
console.log(isTruthy('Bia'))
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(function(){}))
console.log(isTruthy(20 * 10))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {
    marca: "ford",
    modelo: "gol",
    placa: "AZD456",
    ano: 2020,
    cor: "verde",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = (cor) => {
   carro.cor = cor
}

carro.mudarCor("vermelho")

console.log(carro)

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = () => {
    return carro.cor;
}

carro.obterCor()



/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

    carro.obterModelo = () => {
        return carro.modelo
    }
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
    carro.obterMarca = () => {
        return carro.marca
    }

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = () => {
    return `esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`
}


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas =  (numeroPessoas) => {
    let totalPessoas = carro.quantidadePessoas + numeroPessoas;
    carro.quantidadePessoas = totalPessoas 
        if(carro.quantidadePessoas >= carro.assentos){
            return `O carro já está lotado`
        }
    return `já temos ${totalPessoas} pessoas no carro`
};


console.log(carro.quantidadePessoas)


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
//console.log(carro.obterCor()) //vermelho

// Mude a cor do carro para amarelo.

//console.log(carro.mudarCor("amarelo"))
// E agora, qual a cor do carro?

//console.log(carro.obterCor())// amarelo

// Mude a cor do carro para verde musgo.
//carro.mudarCor("verde musgo")

// E agora, qual a cor do carro?

//console.log(carro.obterCor())
// Qual a marca e modelo do carro?

//console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.


// Adicione mais 4 pessoas no carro.


// Faça o carro encher.


// Tire 4 pessoas do carro.


// Adicione 10 pessoas no carro.


// Quantas pessoas temos no carro?