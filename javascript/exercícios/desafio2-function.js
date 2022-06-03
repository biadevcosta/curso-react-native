// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
 
function soma(a,b){
     return a + b
}

//console.log(soma(3,4))

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
    let recebeSoma= soma(4,4) + 5

// Qual o valor atualizado dessa variável?
    
   //console.log(recebeSoma) // o valor é 13

// Declare uma nova variável, sem valor.

    let valor = ""
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
    function adicionaValor(){
        valor = 34;
        return `O valor da let agora é ${valor}`
    }


// Invoque a função criada acima.
    //console.log(adicionaValor())
 
// Qual o retorno da função? (Use comentários de bloco).

    //34
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
 
    function multiplica(num1,num2,num3){
        if (num1 == undefined || num2 == undefined || num3 == undefined){
            return "Preencha todos os valores corretamente!"
        } 
            return num1 * num2 * num3 + 2 
    }
    
  

// Invoque a função criada acima, passando só dois números como argumento.

console.log(multiplica(1,3))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// preencha todos os valores corretamente 

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(multiplica(1,3,4))
   
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//14

/*

Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function calcula(arg1,arg2,arg3){
   
    if (arg1 !== undefined && arg2 == undefined && arg3 == undefined){
        return arg1
    } else if (arg1 != undefined && arg2 != undefined && arg3 == undefined){
        return arg1 + arg2
    }else if (arg1 != undefined && arg2 != undefined && arg3 != undefined){
        return (arg1 + arg2) / arg3
    } else if (arg1 == undefined && arg2 == undefined && arg3 == undefined){
        return false
    } else {
        null
    }
    
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(calcula()) //false
console.log(calcula(2,3)) //5
console.log(calcula(1))//1
console.log(calcula(10,5,3))//5
console.log(calcula(null))//null
