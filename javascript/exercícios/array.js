/*Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.*/

function retornaIndice(array,indice){
    return array[indice]
}

console.log(retornaIndice([1,3,4,5,6],3))