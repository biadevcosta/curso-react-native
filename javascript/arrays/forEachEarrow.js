/*
const imgs = document.querySelectorAll('img')
console.log(imgs)
imgs.forEach(function(item,index,array){
    console.log(`passando pela imagem ${index + 1}`)
})

//ARROM FUNCTION
//Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos
const imgs = document.querySelectorAll('img')
imgs.forEach((item,index,array) => {
    console.log(item)
})

//código de uma linha
let i = 0
imgs.forEach(() => console.log(i++))
const numeros = [1,52,64,2,12]
numeros.sort()
console.log(numeros)*/

//exemplo

const li = document.querySelectorAll('li')

li.forEach((item, index) => (item.classList.add('oNomequeEuQuiser' + index)))
