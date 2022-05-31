/* O que é DOM

É uma interface que representa documento html e XML através de objetos
*/


const titulo = document.querysELECTOR('H1')

titulo.innerText; //retorna o texto
titulo.classList; //retrona a classe
titulo.id; //retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addeventListener('click', callback);
//ativa a função callback ao click no titulo