//não modifica o array principal
//não retorna um array, retorna um número reduzindo em um único item

let arr = [2,3,4,5,6,7]

let reduce = arr.reduce((valorAcumulado,valorAtual,indice,array)=> {
    return valorAcumulado + valorAtual;
},0 /*valor que começa, se não tiver assume o primeiro item */)

console.log(reduce)

/* 
1 - 0 + 1 = 1
2 - 1 + 2 = 3
3 - 3 + 3 = 6
4 - 6 + 4 = 10
5- 10 + 5 = 15
*/

let arrNome = ["A","n","a"]
let reduceNome = arrNome.reduce((acumulado, item,index,array)=>{
    return acumulado + item
})

console.log(reduceNome)

//reduceRigth()

//mesmo esquema do recuce, mas ele faz da direita para esquerda

 
let reduceRigthNome = arrNome.reduceRight((acumulado, item,index,array)=>{
    return acumulado + item
})

console.log(reduceRigthNome)