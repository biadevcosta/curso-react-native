import React from 'react'
import {Text} from 'react-native'
import estilo from './estilo'
import Estilo from './estilo'

function Saudacao(){
    return <Text style={estilo.txtP}>Olá mundo</Text>
}

function Sobremim(){
    return <Text style={estilo.txtP}>Me chamo Ana</Text>
}

export default() => 
    <Text style={estilo.txtP}>Export default</Text>


export { Saudacao, Sobremim }