/* 
Escopo é o lugar que vc declara uma variável 
temos os escopos:
    Global -> quando criamos no topo, de qualquer lugar acessamos ela
    Local -> quando criamos dentro de uma função e não conseguimos acessar de fora
 */ 

    let myVar = 1 //escopo global

    function myFunction(){
        return myVar //acessou myvar que esta fora
    }

    console.log(myFunction())

    
