import React from "react" //precisa usar quando vc for usar um jsx - javascript que vira html
import {View} from 'react-native' // esta pegando um modulo

//Como colocar um component 
import ComponentUm /* maiuscula */ from './components/Primeiro' 
import Padrao,{ Comp2, Comp3 } from './components/Multi'

/*
===== 1 forma 
    function ola() { //aqui você coloca o conteudo, a função irá retornar e coloca os componentes do react-native
    return <Text> Olá </Text>
}
   export default ola //expõem o ola para outros modulos 

===== 2 forma 
      usando arrow function função anonima

    const App = function () {
        return <Text> Primeiro component </Text>
    }

     export default App

===== 3 forma 

    export default function () {
       return <Text> Primeiro component </Text>
    }

    */ 

    // usando outro component
    export default () => (
        <View>
            <Padrao/>
            <ComponentUm/>  
            <Comp2/>
            <Comp3/>
        </View>
    )
  

    

