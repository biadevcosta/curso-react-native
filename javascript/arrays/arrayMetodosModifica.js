/*  const pilotos = ['Ana', 'Joelma', 'Edu']


pilotos.push('Madrid')//push - adiciona elemento na última posição
console.log(pilotos)


pilotos.pop() //pop - remove o último item da array
console.log(pilotos)

pilotos.shift() // shift remove o primeiro
console.log(pilotos)

pilotos.unshift('Geleia') //adiciona no primeiro
console.log(pilotos)

//splice - remove a partir do index de um elementos, a quantidade que você quiser e adiciona

pilotos.splice(2,0,'hamburguer', 'feliz')
console.log(pilotos)

//slice - faz uma nova array a partir do índice de um elemento
//[].splice(index,remover, item 1, item 2) 
// adiciona valores na array a partir do index. remove a quantidade de itens que for passada no segunda parâmetro, adiona o restante
const newPiloto = pilotos.slice(3)
console.log(newPiloto)
const newPiloto2 = pilotos.slice(1,4)
console.log(newPiloto2) */

//[]FILL()
//[].fill(valor, inicio, final) preenche a array com o valor do inicio até o fim
//['item1','item2','item3'].fill('banana',0,1)

const { getPixelSizeForLayoutSize } = require("react-native/Libraries/Utilities/PixelRatio");

//reverse - inverte  ordem da array
//pilotos.reverse()

let videoGames = ['Switch', 'PS4', 'Xbox']

let ultimoItem = videoGames.pop(); //pega o último

console.log(ultimoItem)

videoGames.push('3ds')

console.log(videoGames)


for(let numero = 0 /*inicial*/; numero < 10 /*condicao*/; numero++/*incremento*/){
    console.log(numero)
}

let i = 0
while(i<10 /*condição*/){
    console.log(i)
    i = i + 5 /*incremento*/
}



