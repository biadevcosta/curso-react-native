// setTimeout(function, delay)
//depois de um determinado tempo a função será feita
//setTimeout(callback, tempo,arg1,arg2

setTimeout(()=> {
    console.log("deu 1 sg")
},1000 //Mil milisegundos
)

function espera(texto){
    console.log(texto)
}

setTimeout(espera, 1000, 'Depois de 1sg')
