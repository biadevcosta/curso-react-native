import React from "react"
import {SafeAreaView, Text, StyleSheet} from "react-native"
import Export, { Saudacao, Sobremim } from './components/Olamundo'


export default () => (
    <SafeAreaView style = {css.App}>

        <Export/>

    </SafeAreaView>
)

const css = StyleSheet.create ({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})
