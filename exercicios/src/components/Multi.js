import React from 'react'
import {Text} from 'react-native'

function Comp(){
        return <Text>Sou o componente 1</Text>
}

function Comp2() {
    return <Text>Sou o componente 2</Text>
}

function Comp3() {
    return <Text>Sou o componente 3 </Text>
}

export { Comp2, Comp3 } //O nome precisa estar igual no APP
export default Comp //Nome não precisa esta rigual
