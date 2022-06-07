function media(valores){
    let soma = 0;

    for (i = 0; i < valores.length; i++){
        soma = soma + valores[i];
    }
    media = soma / valores.length;

    return Math.round(media);
}

console.log(media([2,10,8,6,5]));