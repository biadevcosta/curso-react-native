class veiculo {
    ligar(){
        console.log("veiculo ligado")
    }
    acelerar(){
        console.log("veiculo acelerado")
    }
    parar(){
        console.log("veiculo parado")
    }
}

class carro extends veiculo {
    ligar(){
        console.log("carro ligado")
    }
}

class SUV extends carro {
    acelerar(){
        console.log("suv acelerando")
    }
}

suv = new SUV()
console.log(suv.ligar())
console.log(suv.acelerar())
console.log(suv.parar())




