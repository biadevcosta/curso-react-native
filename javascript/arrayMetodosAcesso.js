// Os métodos de acesso não modificam a array original, retorna uma array modificada

// [].concat() | irá concatenar a array com o valor passado

let transporte1 = ['Barco', 'Aviao']
let transporte2 = ['Carro', 'Moto']
let transportes = transporte1.concat(transporte2)
let maisTransportes = transporte1.concat(transporte2, 'Van')

/* [].includes(), [].indexOf e [].lastIndexOf() 
[].includes(valor) verifica se a array posssui o valor e retornar true or false
[].indexOf(valor) verifica se a array possui o valor e retorna  o index do primeiro valor na array
[].lastIndexOf(valor) retorna o index do último 
)
*/

const linguagens = ['HTML', 'CSS','js','php','python', 'js'];

linguagens.includes('CSS')//true
linguagens.includes('ruby')//false

