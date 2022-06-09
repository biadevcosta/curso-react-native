
// for (decalara a var; condicional;incremento)
for(let cont = 0; cont < 100; cont++ ){
    //console.log(cont++)
}


function media(...VariosArg){
    let total = 0
    for (const arg of VariosArg){
        total += arg;
    }
    return  total / VariosArg.length
}

console.log(media(2.5,3.6,5.7,6.7))

//for of 


function mediaIdade(...idades){
    

}