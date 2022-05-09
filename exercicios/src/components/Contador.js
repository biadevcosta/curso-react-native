import React, { useState } from 'react';
import {Button, View, Text, StyleSheet} from "react-native"
import Estilo from './estilo'

export default props => {
    const [valor, setValor] = useState(0);

    return(
        <>
            <Text style={Estilo.txtG}>{valor}</Text>

            <Button 
            title="+" 
            onPress={() => {
                setValor(valor +1)
            }}
            />
            <Button
            title="-" 
            onPress={() => {
                setValor(valor -1)
            }}
            />
        </>
    )
}