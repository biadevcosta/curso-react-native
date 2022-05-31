let instrumentos = ['Guitarra', 'Baixo', 'Violão'];
let precos = [49, 99, 69, 89]

let dados = [new String('Tipo 1'),
['Carro', 'Portas', {cor: 'azul', preco:2000}], 
function andar(nome){console.log(nome)}]

let preco = dados[1][2].preco
console.log(preco)

let andar = dados[2]

//console.log(andar('abobora'))

const carros = ['Ford', 'Fiat', 'Honda']

carros [2] = 'Ferrari' //substituiu honda que está no indice 2
carros [3]= 'Mustang' //adiciona ao 3, não substitui pq tinha nada lá  
carros[10] = 'Kia' //cria array com 11 itens, e empty itens
//console.log(carros)


const li = document.querySelectorAll('li')

// => transformando a lista de li em array
const arrayLi = Array.from(li)

//=> tranformando objeto em array 

const obj = {
    0: 'Ana', //precisa ter numeros 
    1: '19',
    2: 'Embu',
    length: 3 //Tem que tem o length
}

const objArray = Array.from(obj)

//=> verificar se é array

//console.log(Array.isArray(li))

const frutas = ['Banana', 'Pêra', 'Maça', ['Pinha', 'Embu']]
//console.log(frutas.length)

frutas.sort() //deixa em ordem alfabetica

const idades = [1,43,56,2,7,89,3,12]
idades.sort() //ordem crescente de caracter em caracter 

//[]FILL()
//[].fill(valor, inicio, final) preenche a array com o valor do inicio até o fim
const item = ['item1','item2','item3']
item.fill('banana',0,2) //a partir do 0 no 2 para


