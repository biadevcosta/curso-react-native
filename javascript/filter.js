//ele filtra os itens da array
//cria novo array


let arr = [1,2,3,4,5,6,7,8,9]

let filtrada = arr.filter((item,index,array) => {
    return item > 4
})

console.log(filtrada)

//encadeando métodos map e filter

//=> podemos encadear metodos, usar map e filter juntos 

let array = [3,4,654,2,1,55,]

let arrayMap = array.map((item,index,array)=>{
    return item + 10 
}).filter((item) => item > 13)



/*let arrayFilter = arrayMap.filter((item, index, array)=>{
    return item > 15
})*/

console.log(arrayMap)