import React from 'react'
import {Text} from 'react-native'


function Saudacao(){
    return <Text>Olá mundo</Text>
}

function Sobremim(){
    return <Text>Me chamo Ana</Text>
}

export default() => 
    <Text>Export default</Text>

    
export { Saudacao, Sobremim }