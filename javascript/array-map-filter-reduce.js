
//Filter()
//=> O método filter() cria uma nova array preenchida com os elementos que passam no teste feito pela função

const precos = [
    "Credito",
    "R$200",
    "R$400",
    "Contas a pagar",
    "R$50",
    "Meus dados",
];

const precosFiltro = precos.filter (preco => {
    return preco.includes("R$") //Se der true retorna os valores, se der false array vazia
});

//console.log(precosFiltro) 

//map

const precoNumeros = precosFiltro.map(preco =>{
    return +preco.replace("R$","-") 
    //ou Number(preco.replace())
    //replace(tira,adiciona)
    //O + ou Number na frente transforma em número, pode-se usar o number tbm 
    
})

console.log(precoNumeros)

//reduce


