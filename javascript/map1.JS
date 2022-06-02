//vamos criar uma array atraves do map, só que com o dobro dos números da array original
const nums = [1,2,3,4,5]

let resultado = nums.map (function(valorAtual, indice, array){
    return valorAtual * 20
})

console.log(resultado)

//Vamos passar essas funçõs como callback para nosso map
const soma10 = valorAtual => valorAtual + 10
const triplo = valorAtual => valorAtual * 3
const paraDinheiro = valorAtual => `R$ ${parseFloat(valorAtual).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)


let numeros = [1,2,3,4,5]
//array para objeto 
//percorre todos itens e já intera uma array
const paraObjeto = numeros.map((item,index,array) => {
    return{index: index, item: item}
})

console.log(paraObjeto)

//se fizessemos com o forEach, ele não intera uma nova array

let newArray = []
numeros.forEach((item, index,array)=> {
    newArray.push({index: index,item:item})
})

console.log(newArray)