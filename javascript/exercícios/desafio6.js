/*Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
/
function showTeamPosition (index){
    if (index <= teams.length){
    return `O time que está em ${index} lugar é o ${teams[index]}.`
    } return `Não temos a informação do time que está nessa posição.`
}
console.log(teams.length)
console.log(showTeamPosition(0))*/
const teams = ["São Paulo","Corinthians","Palmeiras", "Vasco","Flamengo"]
function showTeamPosition (index){
    if (index >= 1 && index <= 5){
    return `O time que está em ${index} lugar é o ${teams[index - 1]}.`
    } return `Não temos a informação do time que está nessa posição.`
}

console.log(teams.length)
console.log(showTeamPosition(-1))

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(-1))
console.log(showTeamPosition(1))
console.log(showTeamPosition(2))
console.log(showTeamPosition(3))
console.log(showTeamPosition(4))
// ?

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

num = 20
while(num >= 20 && num <=30){
    console.log (num++)
}
// ?

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
// ?

function convertToHex(cor){
    let corParaCoverter = cor
    switch(corParaCoverter){
        case "vermelho":
            console.log(`O hexadecimal para a cor vermelho é #65dg2 .`)
            break;
        case "amarelo":
            console.log(`O hexadecimal para a cor amarelo é #06421 .`)
            break;
        case "preto":
            console.log(`O hexadecimal para a cor preto é #1111 .`)
            break;
        case "branco":
            console.log(`O hexadecimal para a cor amarelo é #0000 .`)
            break;
        default:  console.log(`Não temos o equivalente hexadecimal para ${corParaCoverter}.`)
    }

}


/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex("azul")
convertToHex("rosa")
convertToHex("")
// ?