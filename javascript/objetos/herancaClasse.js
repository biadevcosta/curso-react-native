class Mamifero{
    constructor(species, name, age){
        this.species = species
        this.name = name
        this.age = age
        this.mammaryGland = true
    }

    incrementAge () {
        this.age++
    }
}

class Lion extends Mamifero {
    constructor(species, name, age, manEater){
        super(species,name, age) // indica que estaq pegando os atributos da mãe
        this.manEater = manEater
    }
    eatZebras(animals){
        return animals.filter(animal => animal.species !== 'zebra')
    }
}


const zeca = new Mamifero('zebra', 'zeca', 6)
const pompeu = new Mamifero('elefante', 'pompeu', 5)
const angus = new Mamifero('cavalo', 'Angus', 5)
const mufasa = new Lion('leão', 'Mufasa',10, false)

const animals = [zeca, pompeu, angus]
console.log(mufasa)