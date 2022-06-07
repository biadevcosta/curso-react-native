/*const Dom = {
    seletor: 'li',
    element(){
        return document.querySelector(this.seletor)
    },
    ativar(){
        this.element().classList.add("classeAdicionada")
    }
}

Dom.ativar()*/

//real function 

function Dom (seletor){
    this.element = function(){
        return document.querySelector(seletor);
    }
    this.ativar = function(classe){
        this.element().classList.add(classe)
    }
}

const li = new Dom("li:last-child")
const ul = new Dom('ul')
const h1 = new Dom('h1')
const lastLi = new Dom ("li:last-child")
lastLi.ativar("ultimoLi")


