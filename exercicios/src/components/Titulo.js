import React, {Fragment} from "react"
import { View, Text} from 'react-native'
import estilo from './estilo'

export default props => {
    return (
        <Fragment>
            <Text style= {estilo.txtG}> {props.principal}</Text>
            <Text style= {estilo.txtP}> {props.secundario}</Text>
        </Fragment>
    )
}