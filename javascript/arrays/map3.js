const carros = ['Ford','Fiat','Honda']

const novaArray = carros.map((item, index, array)=>{
   return item.toUpperCase();
    
}) 

const numeros = [2,4,5,6,10]
const dobroNumeros = numeros.map(item => item * 2)


const nomes = ['bia', 'luna', 'bombom']
const frasesNomes = nomes.map((nome,index,todos) => {
    return `${index+1}) ${nome}`
})

console.log(novaArray)
console.log(dobroNumeros)
console.log(frasesNomes)

const aulas = []