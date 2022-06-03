//aplica uma função, o retorno vai ser true ou false baseado no retorno da função
//verifica se todos os itens estão dentro da condição passada pela função
//se todos estiverem na condição retorna true, se não false.
//qualquer verificação que vc precisa que todos itens seja true
let arr = [1,2,3,4,5,6,7]

var every = arr.every((item)=> {
    return item < 8;
})

console.log(every)

//SOME 
//mesma coisa que o every, mas se algum dos itens for true para condição retorna true

var some = arr.some((item)=> {
    return item % 2 === 0;
})

console.log(some)