
//Fazer um algoritmo que imprima os numeros de 0 a 100 sem função e com função

//sem função
    for(let cont = 0; cont <= 100; cont++){
        //console.log(cont)
    }

    //com função 

    function imprime1a100(){
        for (cont = 0; cont <= 100 ; cont++){
            console.log(cont)
        }
    }

    //(imprime1a100())

   //EXERCICIO EXTRA QUE FIZ  //function que imprime e recebe dois parametros, do numero que quer começar e de onde quer terminar

    function ImprimeNumero(comeco,fim){
        for(comeco; comeco <= fim; comeco++){
            console.log(comeco)
        }
    }

    //console.log(ImprimeNumero(1,10))



//Fazer um algoritmo que imprima os numeros pares de 0 a 100 sem função e com função
//com função
function imprimePares(){
    for(cont = 0; cont <= 100; cont++){
        if(cont % 2 == 0){
            console.log(`O número ${cont} é par`)
        }
    }
}
 //imprimePares()

 //sem função

 for (cont = 0; cont <=100; cont++){
     if(cont % 2 == 0){
         //console.log(`O número ${cont} é par`)
     }
 }


//Fazer um algoritmo que imprima os numeros impares de 0 a 100 sem função e com função

//com função
function imprimeImpar(){
    for(contador = 0; contador <= 100; contador++){
        if(contador % 2 != 0){
            console.log(`${contador} é impar`)
        }
    }
}
//imprimeImpar()

//sem função
for(contador = 0; contador <= 100; contador++){
    if(contador % 2){
        //console.log(`${contador} é impar`)
    }
}



//Fazer um algoritmo que imprima os numeros primos de 0 a 100 sem função e com função

//sem função 

for (let a =0; a <=100; a++){
    let divisores = 0;
    for (b=1; b <= a; b++){
        if (a % b === 0){
        divisores++
        }
    }
    if(divisores==2){
        //console.log(a)
    };
}

//com função
function pegaPrimos(){
    for (let a =0; a <=100; a++){
        let divisores = 0;
        for (b=1; b <= a; b++){
            if (a % b === 0){
            divisores++
            }
        }
        if(divisores==2){
            console.log(a)
        };
    }
}
//pegaPrimos()


 
//Fazer um algoritmo que imprima os numeros multiplos de 5 de 0 a 100 sem função e com função

//sem função
for(i = 1; i <=100; i++){
    if(i % 5 == 0){
        //console.log(i)
    }
}

//com função
function multiplo(){
    for(i = 1; i <=100; i++){
        if(i % 5 == 0){
            console.log(i)
        }
    }
}

//multiplo()

//Fazer um funcao que recebe 2 parametros numericos e imprima os valores entre esses numeros

function imprimevalores (a,b){
    for(i = a; i<=b; i++){
        console.log(i)
    }
}

//imprimevalores(1,20)

//Fazer uma funcao que receba um array e retorne os numeros pares desse array sem usar o filter e usando filter

//usando for

function retornaPares(arr){
    for(i = 0; i <= arr.length; i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i])
        }
    }
}

//retornaPares([1,2,3,4,5,6,8,10,12])

// usando filter

function pegaPares (item){
    if (item % 2 == 0){
        return item
    }
}

function retornaParesFilter(arr){
    let numerosPares = arr.filter(pegaPares);
    console.log(numerosPares)
}

//retornaParesFilter([1,2,3,4,5,6,7,8,9,10])

//Fazer uma funcao que receba um array e retorne os numeros impares desse array sem usar o filter e usando o filter
//sem filter
function retornaImpares(arr){
    for(i = 0; i <= arr.length; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
//retornaImpares([1,2,3,4,5,6,7,8,9])

//com filter
function pegaImpar(item){
    if (item % 2 != 0){
        return item
    }
}

function filtraImpar(arr){
    filtrada = arr.filter(pegaImpar)
    console.log(filtrada)
}

//filtraImpar([1,2,3,4,5,6,7,8,9])



//Fazer uma funcao que receba um array e retorne os numeros primos desse array sem usar o filter e usando o filter

//sem filter
function pegaPrimosArray(arr){
    for (let a =0; a <= arr.length; a++){
        let divisores = 0;
        for (b=1; b <= a; b++){
            if (a % b === 0){
            divisores++
            }
        }
        if(divisores==2){
            console.log(a)
        };
    }
}

pegaPrimosArray([1,2,3,4,5,6,6,7,,8,9,11])

//com filter 

function imprimePrimosArray (arr){
    const arrNova= arr.filter((x) =>{
        if(pegaPrimosArray(x)) return x
})
    return arrNova
}

function pegaPrimosArray(numero){
    for(let divisor= 2; divisor < numero; divisor++){
        if (numero % divisor === 0)
        return false
    }
        return true
}
    

console.log(imprimePrimosArray([1,2,3,4,5,6,7,8,9,11]))


//Fazer uma funcao que receba um array e retorne um novo array e para cada posicao desse array que tiver um numero par retorne o numero com - par na frente e para cada posicao que tenha um impar retorne o numero com - impar na frente e quando for zero retorne a string zero ao invés do numero 0.

function retornaImparPar(arr){
    arr.forEach(function (item,index,array){
        if (item  === 0){
            console.log ("zero")
        } else if (item % 2 != 0){
            console.log(`${item} - impar`)
        } else if (item % 2 == 0){
            console.log( `${item} - par`)
        }
    })}

    
//retornaImparPar([1,2,3,4,5,6,7,8,9,10,0])

